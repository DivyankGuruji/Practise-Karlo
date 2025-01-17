import React from "react";

const Submit = ({ statuses = [], totalQuestions = 0 }) => {
    const totalAttempted = statuses.filter((status) => status === "answered").length;
    const totalMarkedForReview = statuses.filter((status) => status === "review").length;
    const totalUnattempted = totalQuestions - totalAttempted - totalMarkedForReview;

    return (
        <div className="submit">
            <div className="head">Exam Summary</div>
            <div className="question-status">Total Questions Attempted: {totalAttempted}</div>
            <div className="question-status">Total Questions Marked for Review: {totalMarkedForReview}</div>
            <div className="question-status">Total Unattempted Questions: {totalUnattempted}</div>
            <div className="thank">Thank You! for participating in the exam</div>
            <div className="wish">Best of Luck for Your Future</div>
        </div>
    );
};

export default Submit;
