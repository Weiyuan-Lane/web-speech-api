"use client";

import { Volcano } from "@mui/icons-material";

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

function speechSynthesisForDownload(props: SpeechSynthesisUtteranceProps) {
  const utterance = getSpeechSynthesisUtterance(props);
  const stream = new MediaStream();
  const audioContext = new AudioContext();
  const source = audioContext.createMediaStreamSource(stream);
  const destination = audioContext.createMediaStreamDestination();
  source.connect(destination);

  const mediaRecorder = new MediaRecorder(destination.stream);
  const audioChunks = new Array<Blob>();

  utterance.onstart = () => {
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.push(event.data);
      }
    };
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
      const audioUrl = URL.createObjectURL(audioBlob);
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `output-${timestamp}.mp3`;
      const link = document.createElement('a');

      link.href = audioUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  };

  utterance.onend = () => {
    mediaRecorder.stop();
  };

  mediaRecorder.start();
  SpeechSynthesisApi.speak(utterance);
}

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
  speechSynthesisForDownload,
};
