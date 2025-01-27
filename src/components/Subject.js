import React from "react";

const Subject = ({ onJumpToQuestion, totalQuestions }) => {
  return (
    <div className="subject">
      <button onClick={() => onJumpToQuestion(0)} className="subject-button">Subject 1</button>
      <button onClick={() => onJumpToQuestion(Math.floor(totalQuestions / 3))} className="subject-button">Subject 2</button>
      <button onClick={() => onJumpToQuestion(Math.floor((2 * totalQuestions) / 3))} className="subject-button">Subject 3</button>
    </div>
  );
};

export default Subject;
