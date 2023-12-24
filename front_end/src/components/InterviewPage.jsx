// InterviewPage.js
import React, { useState } from 'react';
import './InterviewPage.css';

const InterviewPage = () => {
  const [userQuestion, setUserQuestion] = useState('');
  const [interviewerResponse, setInterviewerResponse] = useState('');

  const handleUserQuestionChange = (event) => {
    setUserQuestion(event.target.value);
  };

  const handleVoiceRecognition = () => {
    // Use the Web Speech API for voice recognition
    const recognition = new window.webkitSpeechRecognition(); // For Chrome

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserQuestion(transcript);
    };

    recognition.start();
  };

  const handleSubmitQuestion = () => {
    // Here, you can submit the user's question to an API or process it as needed
    // For simplicity, we'll just echo the question back as the interviewer's response
    setInterviewerResponse(userQuestion);
  };

  return (
    <div className="interview-page">
      <div className="interviewer-section">
        <h2>Interviewer Section</h2>
        <div className="response">{interviewerResponse}</div>
      </div>
      <div className="user-section">
        <h2>User Section</h2>
        <textarea
          value={userQuestion}
          onChange={handleUserQuestionChange}
          placeholder="Type your question..."
        />
        <button onClick={handleVoiceRecognition}>Start Voice Recognition</button>
        <button onClick={handleSubmitQuestion}>Submit Question</button>
      </div>
    </div>
  );
};

export default InterviewPage;
