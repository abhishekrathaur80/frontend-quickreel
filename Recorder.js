import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import './Recorder.css'; 

const Recorder = ({ onRecordingComplete }) => {
  const [isRecording, setIsRecording] = useState(false);

  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  const handleAudioStop = (recordedBlob) => {
    onRecordingComplete(recordedBlob);
  };

  return (
    <div className="recorder-container">
      <ReactMic
        className="react-mic"
        record={isRecording}
        onStop={handleAudioStop}
        strokeColor="#000000"
        backgroundColor="yellow"
      />
      {isRecording ? (
        <button className="record-button" onClick={handleStopRecording}>
          Stop Recording
        </button>
      ) : (
        <button className="record-button" onClick={handleStartRecording}>
          Start Recording
        </button>
      )}
    </div>
  );
};

export default Recorder;
