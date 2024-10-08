"use client";

let SpeechRecognitionApi: {
  new (): SpeechRecognition;
  prototype: SpeechRecognition;
};
let SpeechGrammarListApi: {
  new (): SpeechGrammarList;
  prototype: SpeechGrammarList;
};
let SpeechRecognitionEventApi: {
  new (type: string, eventInitDict: SpeechRecognitionEventInit): SpeechRecognitionEvent;
  prototype: SpeechRecognitionEvent;
};
let SpeechSynthesisUtteranceApi: {
  new (text?: string): SpeechSynthesisUtterance;
  prototype: SpeechSynthesisUtterance;
}
let SpeechSynthesisApi: SpeechSynthesis;

if (typeof window !== 'undefined') {
  SpeechRecognitionApi = (window.SpeechRecognition || window.webkitSpeechRecognition);
  SpeechGrammarListApi = (window.SpeechGrammarList || window.webkitSpeechGrammarList);
  SpeechRecognitionEventApi = (window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent);
  SpeechSynthesisUtteranceApi = window.SpeechSynthesisUtterance;
  SpeechSynthesisApi = window.speechSynthesis;
}

export type engageSpeechRecognitionCallbackType = (result: string, confidence: number) => void;

function engageSpeechRecognition(
  callback: engageSpeechRecognitionCallbackType,
  endCallback: () => void,
  continuous: boolean = false,
): SpeechRecognition {
  const recognition = new SpeechRecognitionApi();
  recognition.continuous = continuous;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const lastIndex = event.results.length - 1;
    const { transcript: result, confidence } = event.results[lastIndex][0];

    callback(result, confidence);
  };

  recognition.onspeechend = () => {
    endCallback();
  };

  recognition.start();
  return recognition;
}

function getVoiceLanguages(): string[] {
  if (SpeechSynthesisApi === undefined) return [];

  const voices = SpeechSynthesisApi.getVoices();
  const languages = voices.map((voice) => {
    return voice.lang;
  });

  // Get unique language array
  return Array.from(new Set(languages));
}

function getVoicesForLang(lang: string): string[] {
  if (SpeechSynthesisApi === undefined) return [];

  const voices = SpeechSynthesisApi.getVoices();
  const filteredVoices = voices.filter((voice) => {
    return voice.lang === lang;
  }).map((voice) => {
    return voice.name;
  });

  // Get unique voice array
  return Array.from(new Set(filteredVoices));
}

type SpeechSynthesisUtteranceProps = {
  text: string,
  language: string,
  voice: string,
  pitch: number,
  rate: number,
  volume: number,
}

function getSpeechSynthesisUtterance({
  text,
  language,
  voice,
  pitch,
  rate,
  volume,
}: SpeechSynthesisUtteranceProps): SpeechSynthesisUtterance {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = pitch;
  utterance.rate = rate;
  utterance.volume = volume;

  const voices = SpeechSynthesisApi.getVoices();
  const selectedVoice = voices.find((currentVoice) => {
    return currentVoice.lang === language && currentVoice.name === voice;
  });

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  return utterance;
}

function speechSynthesis(props: SpeechSynthesisUtteranceProps) {
  const utterance = getSpeechSynthesisUtterance(props);
  SpeechSynthesisApi.speak(utterance);
}

export type WeiyuanMediaRecorder = {
  stop: () => void;
}

async function recordMediaForDownload({ video = false, systemMedia = true }: { video: boolean, systemMedia: boolean }): Promise<WeiyuanMediaRecorder> {
  console.log('video: ' + video, 'systemMedia: ' + systemMedia);
  const mediaStream = systemMedia ? await navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: video ? true : undefined,
  }) : await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: video ? true : undefined,
  });

  const mediaChunks = new Array<Blob>();
  let mediaRecorder: MediaRecorder;

  // Specifically needed for audio recording for audioContext only
  if (!video) {
    const audioContext = new window.AudioContext();
    const source = audioContext.createMediaStreamSource(mediaStream);
    const destination = audioContext.createMediaStreamDestination();
    source.connect(destination);
    mediaRecorder = new MediaRecorder(destination.stream);
  } else {
    mediaRecorder = new MediaRecorder(mediaStream);
  }

  mediaRecorder.ondataavailable = (event) => {
    mediaChunks.push(event.data);
  };
  mediaRecorder.onstop = () => {
    const type = video ? 'video/webm;codecs=h264,opus' : 'audio/webm;codecs=h264,opus';
    const mediaBlob = new Blob(mediaChunks, { type });
    const mediaUrl = URL.createObjectURL(mediaBlob);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `output-${timestamp}.webm`;
    const link = document.createElement('a');

    link.style.display = 'none';
    link.href = mediaUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  mediaRecorder.start();

  return {
    stop: () => {
      mediaRecorder.stop();
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }
}

// async function recordVideoForDownload(): Promise<VideoRecorder> {
//   const mediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
//   const videoChunks = new Array<Blob>();
//   const mediaRecorder = new MediaRecorder(mediaStream);

//   mediaRecorder.ondataavailable = (event) => {
//     console.log(event.data);
//     videoChunks.push(event.data);
//   };
//   mediaRecorder.onstop = () => {
//     const videoBlob = new Blob(videoChunks, { type: 'video/webm;codecs=h264,opus' });
//     const videoUrl = URL.createObjectURL(videoBlob);
//     const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//     const filename = `output-${timestamp}.webm`;
//     const link = document.createElement('a');

//     link.style.display = 'none';
//     link.href = videoUrl;
//     link.download = filename;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   mediaRecorder.start();

//   return {
//     stop: () => {
//       mediaRecorder.stop();
//       mediaStream.getTracks().forEach((track) => {
//         track.stop();
//       });
//     }
//   }
// }

// async function recordMediaForDownload({ video = false }: { video: boolean }): Promise<MediaRecorder> {
//   const mediaStream = await navigator.mediaDevices.getDisplayMedia({ 
//     audio: true,
//     video,
//   });
//   const audioChunks = new Array<Blob>();
//   const audioContext = new window.AudioContext();
//   const source = audioContext.createMediaStreamSource(mediaStream);
//   const destination = audioContext.createMediaStreamDestination();
//   source.connect(destination);
//   const mediaRecorder = new MediaRecorder(destination.stream);

//   mediaRecorder.ondataavailable = (event) => {
//     console.log(event.data);
//     audioChunks.push(event.data);
//   };
//   mediaRecorder.onstop = () => {
//     const audioBlob = new Blob(audioChunks, { type: 'audio/webm;codecs=h264,opus' });
//     const audioUrl = URL.createObjectURL(audioBlob);
//     const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//     const filename = `output-${timestamp}.webm`;
//     const link = document.createElement('a');

//     link.style.display = 'none';
//     link.href = audioUrl;
//     link.download = filename;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   mediaRecorder.start();

//   return {
//     stop: () => {
//       mediaRecorder.stop();
//     }
//   }
// }

export {
  SpeechRecognitionApi,
  SpeechGrammarListApi,
  SpeechRecognitionEventApi,
  SpeechSynthesisUtteranceApi,
  SpeechSynthesisApi,

  engageSpeechRecognition,
  getVoiceLanguages,
  getVoicesForLang,
  speechSynthesis,
  recordMediaForDownload,
};
