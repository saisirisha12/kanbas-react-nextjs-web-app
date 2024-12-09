"use client";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import QuestionNavigator from "./question-navigator";

export default function QuizPreview() {
  return (
    <div className="container">
      <div>
        {/* quiz banner */}
        <div className="mb-4">
          <h3>Q1 - HTML</h3>
          <div className="alert alert-danger" role="alert">
            <RiErrorWarningLine className="mb-1" />
            This is a preview of the published version of the quiz.
          </div>
          <label htmlFor="quiz-start-time">Started: Nov 29 at 8:19am</label>
          <h3>Quiz Instructions</h3>
          <hr />
        </div>

        <QuestionNavigator />
        <div className="d-flex justify-content-end align-items-center border p-2 rounded bg-light">
          <label className="text-muted me-3 mb-0">Quiz saved at 8:19am</label>
          <button className="btn btn-danger">Submit</button>
        </div>
      </div>
    </div>
  );
}
