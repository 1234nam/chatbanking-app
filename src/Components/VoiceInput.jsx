import React, { useState, useEffect, useRef } from 'react';

const VoiceInput = ({ onSend }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interim, setInterim] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Sorry, your browser does not support Speech Recognition.');
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcriptChunk = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscript((prev) => prev + transcriptChunk + ' ');
          setInterim('');
        } else {
          interimTranscript += transcriptChunk;
        }
      }
      setInterim(interimTranscript);
    };

    recognitionRef.current.onerror = () => {
      setIsRecording(false);
    };

    recognitionRef.current.onend = () => {
      setIsRecording(false);
    };
  }, []);

  const startRecording = () => {
    if (recognitionRef.current) {
      setTranscript('');
      setInterim('');
      setIsRecording(true);
      recognitionRef.current.start();
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleSend = () => {
    if (transcript.trim()) {
      onSend(transcript.trim());
      setTranscript('');
      setInterim('');
    }
  };

  return (
    <div className="voice-input-container">
      <textarea
        rows={3}
        value={transcript + interim}
        placeholder="Type or speak your message here..."
        onChange={(e) => setTranscript(e.target.value)}
      />
      <div className="voice-input-buttons">
        {!isRecording ? (
          <button onClick={startRecording}>🎤 Start Voice</button>
        ) : (
          <button onClick={stopRecording}>⏹ Stop Voice</button>
        )}
        <button onClick={handleSend} disabled={!transcript.trim()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default VoiceInput;
