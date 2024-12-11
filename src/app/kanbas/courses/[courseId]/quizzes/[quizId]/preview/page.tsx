/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import QuestionNavigator from "../question-navigator";
import { useSelector } from "react-redux";

export default function QuizPreview() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="container">
      <div>
        {/* quiz banner */}
        <div className="mb-4">
          <h3>Q1 - HTML</h3>
          {currentUser?.role === "FACULTY" && (
            <div className="alert alert-danger" role="alert">
              <RiErrorWarningLine className="mb-1" />
              This is a preview of the published version of the quiz.
            </div>
          )}
          <label htmlFor="quiz-start-time">Started: Nov 29 at 8:19am</label>
          <h3>Quiz Instructions</h3>
          <hr />
        </div>

        <QuestionNavigator />
      </div>
    </div>
  );
}
