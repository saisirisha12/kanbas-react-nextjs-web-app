/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import QuizzesControls from "./controls";
import QuizControlButtons from "./quiz-control-buttons";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import * as client from "../../client";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuRocket } from "react-icons/lu";
import {
  setQuizzes,
  updateQuiz,
} from "@/app/kanbas/store/reducers/quizzesReducer";
import { formatDateTime } from "@/app/kanbas/account/users/users";

export default function Quizzes() {
  const { courseId } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();

  const fetchQuizzes = useCallback(async () => {
    const quizzes = await client.findQuizzesForCourse(courseId as string);
    dispatch(setQuizzes(quizzes));
  }, [courseId, dispatch]);

  const setPublished = async (quizId: string, published: boolean) => {
    const quiz = quizzes.find((quiz: any) => quiz._id === quizId);
    const response = await client.updateQuiz({ ...quiz, published });
    dispatch(updateQuiz(response));
  };

  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  return (
    <div className="row">
      {currentUser?.role === "FACULTY" && <QuizzesControls />}
      <ul id="wd-quizzes" className="list-group rounded-0 mt-4">
        <li className="wd-quiz list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <IoMdArrowDropdown className="me-2 fs-3" />
            Assignment Quizzes
          </div>
          <ul className="wd-quiz-list list-group rounded-0">
            {quizzes.map((quiz: any) => (
              <li
                key={quiz._id}
                className="wd-quiz-list-item list-group-item p-3 ps-1"
              >
                <div className="d-flex">
                  <LuRocket className="me-2 fs-3 float-start my-auto" />
                  <div className="flex-fill">
                    <Link
                      className="wd-quiz-link fw-bold"
                      href={`/kanbas/courses/${courseId}/quizzes/${quiz._id}`}
                    >
                      {quiz.title}
                    </Link>
                    <br />
                    <div className="fs-6">
                      {new Date(quiz.availableUntil) < new Date() && (
                        <span className="text-danger">Closed</span>
                      )}
                      {new Date(quiz.availableFrom) < new Date() &&
                        new Date(quiz.availableUntil) > new Date() && (
                          <span className="text-success">Available</span>
                        )}
                      {new Date(quiz.availableFrom) > new Date() && (
                        <span className="text-warning">
                          Not Available Until{" "}
                          {formatDateTime(quiz.availableFrom)}
                        </span>
                      )}
                      {" | "} Due {formatDateTime(quiz.dueDate)} | {quiz.points}{" "}
                      pts | 10 questions
                    </div>
                  </div>
                  {currentUser?.role === "FACULTY" && (
                    <QuizControlButtons
                      quizId={quiz._id}
                      published={quiz.published}
                      setPublished={setPublished}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
