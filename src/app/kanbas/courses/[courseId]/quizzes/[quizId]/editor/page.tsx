/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import { Quiz } from "@/app/kanbas/types";
import * as client from "../../../../client";
import {
  addQuiz,
  updateQuiz,
} from "@/app/kanbas/store/reducers/quizzesReducer";
import { FaCheck } from "react-icons/fa6";
import { PiProhibit } from "react-icons/pi";
import QuestionEditor from "./QuestionEditor";
import QuestionNavigator from "../preview/question-navigator";

export default function QuizEditor() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courseId, quizId } = useParams();
  const { push } = useRouter();
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("Details");
  const isDisabled = currentUser?.role !== "FACULTY";

  const [questionId, setQuestionId] = useState<string | null>(null);

  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const quiz = quizzes.find((q: any) => q._id === quizId);

  const [newQuiz, setNewQuiz] = useState<Quiz>(
    quiz || {
      title: "",
      description: "",
      type: "Graded Quiz",
      course: courseId,
      points: 0,
      assignmentGroup: "QUIZZES",
      shuffleAnswers: false,
      multipleAttempts: false,
      timeLimit: 0,
      assignedTo: "EVERYONE",
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
      published: false,
    }
  );

  const saveChanges = async () => {
    if (quizId === "new") {
      const response = await client.createQuizForCourse(
        courseId as string,
        newQuiz
      );
      dispatch(addQuiz(response));
    } else if (quiz) {
      const response = await client.updateQuiz(newQuiz);
      dispatch(updateQuiz(response));
    }
    push(`/kanbas/courses/${courseId}/quizzes`);
  };

  const handleAddNewQuestion = () => {
    setQuestionId(null); // Reset questionId for adding a new question
  };

  return (
    <div id="wd-quizzes-editor" className="row ms-0">
      <div className="row">
        <div className="col">
          <button className="btn btn-sm btn-secondary fs-6 mb-1 float-end">
            <IoEllipsisVertical />
          </button>
          <h5 className="float-end">
            Points {newQuiz.points}
            {"  "}
            {newQuiz.published ? (
              <>
                <FaCheck /> Published
              </>
            ) : (
              <>
                <PiProhibit /> Not Published
              </>
            )}
          </h5>
        </div>
      </div>
      <hr />
      <div className="row">
        {/* Tabs */}
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <button
              className={`nav-link red-text ${
                activeTab === "Details" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Details")}
            >
              Details
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link red-text ${
                activeTab === "Questions" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Questions")}
            >
              Questions
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        {activeTab === "Details" && (
          <form>
            {/* Quiz Title */}
            <div className="mb-3">
              <label htmlFor="wd-title" className="form-label">
                Quiz Title
              </label>
              <input
                type="text"
                className="form-control"
                id="wd-title"
                defaultValue={newQuiz?.title}
                onChange={(e) =>
                  setNewQuiz({ ...newQuiz, title: e.target.value })
                }
                disabled={isDisabled}
              />
            </div>

            {/* Quiz Instructions */}
            <div className="mb-3">
              <label htmlFor="wd-description" className="form-label">
                Quiz Instructions
              </label>
              <textarea
                id="wd-description"
                className="form-control"
                rows={5}
                defaultValue={newQuiz?.description}
                onChange={(e) =>
                  setNewQuiz({ ...newQuiz, description: e.target.value })
                }
                disabled={isDisabled}
              ></textarea>
            </div>

            {/* Quiz Type and Assignment Group */}
            <div className="mb-3 row">
              <label htmlFor="wd-quiz-type" className="col-sm-2 col-form-label">
                Quiz Type
              </label>
              <div className="col-sm-10">
                <select
                  id="wd-quiz-type"
                  className="form-select"
                  defaultValue={newQuiz?.type}
                  onChange={(e) =>
                    setNewQuiz({ ...newQuiz, type: e.target.value })
                  }
                  disabled={isDisabled}
                >
                  <option value="Graded Quiz">Graded Quiz</option>
                  <option value="Practice Quiz">Practice Quiz</option>
                  <option value="Graded Survey">Graded Survey</option>
                  <option value="Ungraded Survey">Ungraded Survey</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label
                htmlFor="wd-assignment-group"
                className="col-sm-2 col-form-label"
              >
                Assignment Group
              </label>
              <div className="col-sm-10">
                <select
                  id="wd-assignment-group"
                  className="form-select"
                  defaultValue={newQuiz?.assignmentGroup}
                  onChange={(e) =>
                    setNewQuiz({ ...newQuiz, assignmentGroup: e.target.value })
                  }
                  disabled={isDisabled}
                >
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="EXAMS">EXAMS</option>
                  <option value="PROJECT">PROJECT</option>
                  <option value="QUIZZES">QUIZZES</option>
                </select>
              </div>
            </div>

            {/* Quiz Options */}
            <div className="mb-3">
              <label className="form-label fw-bold">Options</label>
              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-shuffle-answers"
                  checked={newQuiz?.shuffleAnswers}
                  onChange={(e) =>
                    setNewQuiz({
                      ...newQuiz,
                      shuffleAnswers: e.target.checked,
                    })
                  }
                  disabled={isDisabled}
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-shuffle-answers"
                >
                  Shuffle Answers
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-multiple-attempts"
                  checked={newQuiz?.multipleAttempts}
                  onChange={(e) =>
                    setNewQuiz({
                      ...newQuiz,
                      multipleAttempts: e.target.checked,
                    })
                  }
                  disabled={isDisabled}
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-multiple-attempts"
                >
                  Allow Multiple Attempts
                </label>
              </div>
              <div className="row my-3">
                <label
                  htmlFor="wd-time-limit"
                  className="col-sm-4 col-form-label"
                >
                  Time Limit (Minutes)
                </label>
                <div className="col-sm-2">
                  <input
                    type="number"
                    className="form-control"
                    id="wd-time-limit"
                    value={newQuiz?.timeLimit}
                    onChange={(e) =>
                      setNewQuiz({
                        ...newQuiz,
                        timeLimit: parseInt(e.target.value),
                      })
                    }
                    disabled={isDisabled}
                  />
                </div>
              </div>
            </div>

            {/* Assign Section */}
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Assign</label>
              <div className="col-sm-10">
                <div className="border border-1 rounded-1 p-3">
                  <label htmlFor="wd-assign-to" className="form-label fw-bold">
                    Assign to
                  </label>
                  <input
                    id="wd-assign-to"
                    className="form-control"
                    defaultValue={newQuiz?.assignedTo}
                    onChange={(e) =>
                      setNewQuiz({ ...newQuiz, assignedTo: e.target.value })
                    }
                    disabled={isDisabled}
                  />
                  <label
                    htmlFor="wd-due-date"
                    className="form-label fw-bold mt-3"
                  >
                    Due
                  </label>
                  <input
                    id="wd-due-date"
                    className="form-control"
                    type="datetime-local"
                    defaultValue={
                      newQuiz?.dueDate
                        ? new Date(newQuiz?.dueDate).toISOString().slice(0, 16)
                        : ""
                    }
                    onChange={(e) =>
                      setNewQuiz({
                        ...newQuiz,
                        dueDate: e.target.value,
                      })
                    }
                    disabled={isDisabled}
                  />
                  <div className="d-flex mt-3">
                    <div className="w-50">
                      <label
                        htmlFor="wd-available-from"
                        className="form-label fw-bold"
                      >
                        Available from
                      </label>
                      <input
                        id="wd-available-from"
                        className="form-control"
                        type="datetime-local"
                        defaultValue={
                          newQuiz?.availableFrom
                            ? new Date(newQuiz?.availableFrom)
                                .toISOString()
                                .slice(0, 16)
                            : ""
                        }
                        onChange={(e) =>
                          setNewQuiz({
                            ...newQuiz,
                            availableFrom: e.target.value,
                          })
                        }
                        disabled={isDisabled}
                      />
                    </div>
                    <div className="w-50">
                      <label htmlFor="wd-until" className="form-label fw-bold">
                        Until
                      </label>
                      <input
                        id="wd-until"
                        className="form-control"
                        type="datetime-local"
                        defaultValue={
                          newQuiz?.availableUntil
                            ? new Date(newQuiz?.availableUntil)
                                .toISOString()
                                .slice(0, 16)
                            : ""
                        }
                        onChange={(e) =>
                          setNewQuiz({
                            ...newQuiz,
                            availableUntil: e.target.value,
                          })
                        }
                        disabled={isDisabled}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Save and Cancel Buttons */}
            <hr className="mt-5" />
            <div className="float-end">
              <Link
                className="btn btn-secondary me-1"
                href={`/kanbas/courses/${courseId}/quizzes`}
                aria-disabled={isDisabled}
              >
                Cancel
              </Link>
              <button
                type="button"
                className="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  saveChanges();
                }}
                disabled={isDisabled}
              >
                Save
              </button>
            </div>
          </form>
        )}

        {activeTab === "Questions" && (
          // <div className="d-flex justify-content-start ms-3 mt-5">
          //   <button
          //     id="wd-add-question-btn"
          //     className="btn btn-outline-secondary"
          //     data-bs-toggle="modal"
          //     data-bs-target="#wd-quiz-dialog"
          //   >
          //     + New Question
          //   </button>
          // </div>
          <div className="ms-3 mt-5">
            {/* Container for buttons */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* New Question Button */}
              <button
                id="wd-add-question-btn"
                className="btn btn-outline-secondary px-4" /* Added padding for consistency */
                data-bs-toggle="modal"
                data-bs-target={`#wd-quiz-${questionId}-dialog`} >
                + New Question
              </button>
            </div>

            {/* Question Navigator below the buttons */}
            <QuestionNavigator />
          </div>
        )}
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id={`wd-quiz-${questionId}-dialog`}
        tabIndex={-1}
        aria-labelledby="wd-quiz-dialog-label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <QuestionEditor questionId={questionId}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
