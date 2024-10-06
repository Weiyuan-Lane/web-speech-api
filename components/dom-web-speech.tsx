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

if (typeof window !== 'undefined') {
  SpeechRecognitionApi = (window.SpeechRecognition || window.webkitSpeechRecognition);
  SpeechGrammarListApi = (window.SpeechGrammarList || window.webkitSpeechGrammarList);
  SpeechRecognitionEventApi = (window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent);
}

export type engageSpeechRecognitionCallback = (result: string, confidence: number) => void;

function engageSpeechRecognition(callback: engageSpeechRecognitionCallback) {
  const recognition = new SpeechRecognitionApi();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const { transcript: result, confidence } = event.results[0][0];
    callback(result, confidence);
  };

  recognition.onspeechend = () => {
    recognition.stop();
  };

  recognition.start();
}

export {
  SpeechRecognitionApi,
  SpeechGrammarListApi,
  SpeechRecognitionEventApi,

  engageSpeechRecognition
};
