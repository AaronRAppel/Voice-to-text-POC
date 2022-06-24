import React, {useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const VoiceToTextList = () => {
  const [messageList, setMessageList] = useState([])

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const onStart = () => {
    // resetTranscript()
    //
    SpeechRecognition.startListening({ continuous: true })
  }

  const onStop = () => {
    SpeechRecognition.stopListening()

    setMessageList((cur) => [...cur, transcript])

    setTimeout(() => {
      resetTranscript()
    }, 100)
  }

  return (
    <div>
      <h2>Message List</h2>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <div>
        <button onClick={onStart}>Start</button>
        <button onClick={onStop}>Stop</button>
      </div>
      <div>Current story: <p>{transcript}</p></div>
      Story list:
      {
        messageList.map(message => <p>{message}</p>)
      }
    </div>
  );
};