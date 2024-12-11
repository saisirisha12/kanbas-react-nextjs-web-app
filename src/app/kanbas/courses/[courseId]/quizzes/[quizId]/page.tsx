/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { formatDateTime } from "@/app/kanbas/account/users/users";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoPencil } from "react-icons/go";
import { useSelector } from "react-redux";
import AccessCodeDialog from "./accees-code-dialog";
import QuestionNavigator from "./question-navigator";
import * as client from "../../../client";

export default function QuizDetails() {
  const { push } = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courseId, quizId } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const quiz = quizzes.find((quiz: any) => quiz._id === quizId);
  const [latestAttempt, setLatestAttempt] = useState(true);

  const fetchLatestAttempt = async () => {
    const latestAttemptList = await client.getLatestQuizAttempt(currentUser._id as string, quizId as string);
    if(latestAttemptList == null){
      setLatestAttempt(false);
    }
  };

  useEffect(() => {
    fetchLatestAttempt();
  });

  return (
    <div className="quiz-details-container">
      {currentUser?.role === "FACULTY" &&
      <div className="row mt-2">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <button
            className="btn btn-light"
            onClick={() =>
              push(`/kanbas/courses/${courseId}/quizzes/${quizId}/preview`)
            }
          >
            Preview
          </button>
        </div>
        <div className="col-md-7">
          <button
            className="btn btn-light"
            onClick={() =>
              push(`/kanbas/courses/${courseId}/quizzes/${quizId}/editor`)
            }
          >
            <GoPencil /> Edit
          </button>
        </div>
      </div>
    }
      <hr />
      <h3>{quiz.title}</h3>

      {/* Quiz Type */}
      <div className="row mt-2">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-quizType" className="form-label">
            <b>Quiz Type</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-quizType-val" className="form-label">
            {quiz.type}
          </label>
        </div>
      </div>

      {/* Points */}
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-points" className="form-label">
            <b>Points</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-points-val" className="form-label">
            {quiz.points}
          </label>
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-assignment-group" className="form-label">
            <b>Assignment Group</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-assignment-group-val" className="form-label">
            {quiz.assignmentGroup}
          </label>
        </div>
      </div>

      {/* Shuffle Answers */}
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-shuffle-answers" className="form-label">
            <b>Shuffle Answers</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-shuffle-answers-val" className="form-label">
            {quiz.shuffleAnswers ? "Yes" : "No"}
          </label>
        </div>
      </div>

      {/* Time Limit */}
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-time-limit" className="form-label">
            <b>Time Limit</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-time-limit-val" className="form-label">
            {quiz.timeLimit} minutes
          </label>
        </div>
      </div>

      {/* Multiple Attempts */}
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-multiple-attempts" className="form-label">
            <b>Multiple Attempts</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-multiple-attempts-val" className="form-label">
            {quiz.multipleAttempts ? "Yes" : "No"}
          </label>
        </div>
      </div>

      {/* Viewing Responses */}
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-view-responses" className="form-label">
            <b>View Responses</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-view-responses-val" className="form-label">
            Always
          </label>
        </div>
      </div>

      {/* Show Correct Answers */}
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-show-correct-ans" className="form-label">
            <b>Show Correct Answers</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-show-correct-ans-val" className="form-label">
            {quiz.showCorrectAnswers}
          </label>
        </div>
      </div>

      {/* One Question at a Time */}
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-one-que-at-a-time" className="form-label">
            <b>One Question at a Time</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-one-que-at-a-time-val" className="form-label">
            {quiz.oneQuestionAtATime ? "Yes" : "No"}
          </label>
        </div>
      </div>

      {/* Response Lockdown */}
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-browser-lockdown" className="form-label">
            <b>Require Respondus Lockdown Browser</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-browser-lockdown-val" className="form-label">
            No
          </label>
        </div>
      </div>

      {/* Response Lockdown */}
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-view-quiz-res" className="form-label">
            <b>Required to View Quiz Results</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-view-quiz-res-val" className="form-label">
            No
          </label>
        </div>
      </div>

      {/* Webcam Required */}
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-webcam-req" className="form-label">
            <b>Webcam Required</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-webcam-req-val" className="form-label">
            {quiz.webcamRequired ? "Yes" : "No"}
          </label>
        </div>
      </div>

      {/* Lock Questions After Answering */}
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-lock-que-after-view" className="form-label">
            <b>Lock Questions After Answering</b>
          </label>
        </div>
        <div className="col-md-7">
          <label htmlFor="wd-lock-que-after-view-val" className="form-label">
            {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}
          </label>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-3">
          <label htmlFor="wd-due" className="form-label">
            <b>Due</b>
          </label>
        </div>
        <div className="col-3">
          <label htmlFor="wd-assigned-to" className="form-label">
            <b>For</b>
          </label>
        </div>
        <div className="col-3">
          <label htmlFor="wd-available-from" className="form-label">
            <b>Available</b>
          </label>
        </div>
        <div className="col-3">
          <label htmlFor="wd-available-until" className="form-label">
            <b>Until</b>
          </label>
        </div>
      </div>
      <hr />
      <div className="row mt-3">
        <div className="col-3">
          <label htmlFor="wd-due-val" className="form-label">
            {formatDateTime(quiz.dueDate)}
          </label>
        </div>
        <div className="col-3">
          <label htmlFor="wd-assigned-to-val" className="form-label">
            {quiz.assignedTo}
          </label>
        </div>
        <div className="col-3">
          <label htmlFor="wd-available-from-val" className="form-label">
            {formatDateTime(quiz.availableFrom)}
          </label>
        </div>
        <div className="col-3">
          <label htmlFor="wd-available-until-val" className="form-label">
            {formatDateTime(quiz.availableUntil)}
          </label>
        </div>
      </div>
      <hr />
      {currentUser?.role === "STUDENT" && 
      <div className="row">
        { quiz.showCorrectAnswers != "After Published" &&
        <div className="col-md-6 d-flex justify-content-end">
        <button className="btn btn-danger"
        id="wd-start-quiz-btn"
        data-bs-toggle="modal"
        data-bs-target={`#wd-start-quiz-dialog`}>
            Start Quiz
          </button>
          <AccessCodeDialog />
          <hr />
        </div>
      }
      {latestAttempt &&
        <div className="row mt-3">
          <h3 className="mt-3">Your Latest Attempt:</h3>
          {/* <QuestionNavigator latestAttempt={true} showCorrectAnswers={quiz.showCorrectAnswers === "After Publish"} /> */}
          <QuestionNavigator latestAttempt={latestAttempt} showCorrectAnswers={quiz.showCorrectAnswers === "After Published"} />
        </div>
      }
        <div>
        </div>
      </div> 
      }


    </div>
  );
}
