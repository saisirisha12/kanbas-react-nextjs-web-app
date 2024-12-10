/* eslint-disable @typescript-eslint/no-explicit-any */
import { Question } from "@/app/kanbas/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../../../../client";
import { addQuestion, updateQuestion } from "@/app/kanbas/store/reducers/questionsReducer";

export default function QuestionEditor({
  questionId,
}: {
  questionId?: string | null;
}) {
  const { quizId } = useParams();
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const dispatch = useDispatch();
  const question: Question = questions.find((q: any) => q._id === questionId);

  const [newQuestion, setNewQuestion] = useState<Question>(
    question || {
      title: "",
      questionText: "",
      quiz: quizId as string,
      type: "Multiple Choice",
      options: [{ id: 0, text: "" }],
      correctAnswers: [],
      points: 0,
    }
  );

  const handleQuestionTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewQuestion({
      ...newQuestion,
      type: e.target.value,
      options: [],
      correctAnswers: [],
    });
  };

  // saving
  const handleSave = async () => {
    if(questionId){
      const response = await client.updateQuestion(
        newQuestion
      );
      dispatch(updateQuestion(response));
    }
    else{
      const response = await client.addQuestionToQuiz(
        quizId as string,
        newQuestion
      );
      dispatch(addQuestion(response));
    }
  };

  // cancel
  const handleCancel = () => {
    setNewQuestion({
      title: "",
      questionText: "",
      quiz: quizId as string,
      type: "Multiple Choice",
      options: [{ id: 0, text: "" }],
      correctAnswers: [],
      points: 0,
    });
  };

  useEffect(() => {
    if(questionId){
      setNewQuestion(question);
    }
    else{
      setNewQuestion(newQuestion);
    }
  }, [question]);

  return (
    <div className="container">
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control form-control-sm me-2"
          value={newQuestion?.title}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, title: e.target.value })
          }
          placeholder="Title"
        />

        <select
          className="form-select form-control-sm me-4"
          value={newQuestion?.type}
          onChange={handleQuestionTypeChange}
        >
          <option>Multiple Choice</option>
          <option>True/False</option>
          <option>Fill in the Blanks</option>
        </select>

        <div className="d-flex align-items-center">
          <label htmlFor="wd-quiz-question-points" className="me-2 mb-0">
            points
          </label>
          <input
            id="wd-quiz-question-points"
            type="number"
            className="form-control"
            value={newQuestion?.points}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, points: +e.target.value })
            }
            placeholder="Points"
            style={{ width: "80px" }}
          />
        </div>
      </div>
      <hr />

      {/* Question Text */}
      <div className="mb-3">
        {newQuestion?.type === "Multiple Choice" && (
          <label htmlFor="question-prev-Text" className="form-label fs-6">
            Enter your questions and multiple answers, then select the one
            correct answer.
          </label>
        )}
        {newQuestion?.type === "True/False" && (
          <label htmlFor="question-prev-Text" className="form-label fs-6">
            Enter your questions text, then select if True or False is the
            correct answer.
          </label>
        )}
        {newQuestion?.type === "Fill in the Blanks" && (
          <label htmlFor="question-prev-Text" className="form-label fs-6">
            Enter your questions text, then define all possible correct answers
            for the blank. Students will see the question followed by a small
            text box to type their answer.
          </label>
        )}
        <br />
        <label htmlFor="questionText" className="form-label fs-6">
          <b>Question:</b>
        </label>
        <textarea
          id="questionText"
          className="form-control"
          value={newQuestion?.questionText}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, questionText: e.target.value })
          }
          placeholder="Enter your question..."
          rows={4}
        ></textarea>
      </div>

      {/* answers */}
      <div className="mb-3">
        <label className="form-label fs-6">
          <b>Answers:</b>
        </label>

        {/* multiple choice */}
        {newQuestion?.type === "Multiple Choice" &&
          newQuestion?.options.map((option) => (
            <div
              key={option.id}
              className="input-group mb-2 align-items-center"
            >
              <input
                type="radio"
                name="correctAnswer"
                className="form-check-input me-2"
                checked={newQuestion?.correctAnswers[0]?.text === option.text}
                onChange={() =>
                  setNewQuestion({
                    ...newQuestion,
                    correctAnswers: [{ id: 0, text: option.text }],
                  })
                }
              />
              <label htmlFor="wd-quiz-question-points" className="me-2 mb-0">
                {newQuestion?.correctAnswers[0]?.text === option.text
                  ? "Correct Answer"
                  : "Possible Answer"}
              </label>
              <input
                type="text"
                className="form-control me-2"
                value={option.text}
                onChange={(e) =>
                  setNewQuestion({
                    ...newQuestion,
                    options: newQuestion.options.map((o) =>
                      o.id === option.id ? { ...o, text: e.target.value } : o
                    ),
                  })
                }
              />
              <FaTrash
                className="text-danger ms-2"
                onClick={() =>
                  setNewQuestion({
                    ...newQuestion,
                    options: newQuestion.options.filter(
                      (o) => o.id !== option.id
                    ),
                  })
                }
              />
            </div>
          ))}

        {/* true or false */}
        {newQuestion?.type === "True/False" && (
          <div className="form-check">
            <div className="mb-2">
              <input
                type="radio"
                id="true"
                name="trueFalse"
                className="form-check-input"
                checked={newQuestion?.correctAnswers[0]?.text === "true"}
                onChange={() =>
                  setNewQuestion({
                    ...newQuestion,
                    correctAnswers: [{ id: 0, text: "true" }],
                  })
                }
              />
              <label htmlFor="true" className="form-check-label">
                True
              </label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="false"
                name="trueFalse"
                className="form-check-input"
                checked={newQuestion?.correctAnswers[0]?.text === "false"}
                onChange={() =>
                  setNewQuestion({
                    ...newQuestion,
                    correctAnswers: [{ id: 0, text: "false" }],
                  })
                }
              />
              <label htmlFor="false" className="form-check-label">
                False
              </label>
            </div>
          </div>
        )}

        {newQuestion?.type === "Multiple Choice" && (
          <button
            type="button"
            className="btn btn-light text-danger"
            onClick={() =>
              setNewQuestion({
                ...newQuestion,
                options: [
                  ...newQuestion.options,
                  {
                    id:
                      (newQuestion.options[newQuestion.options.length - 1]
                        ?.id || 0) + 1,
                    text: "",
                  },
                ],
              })
            }
          >
            + Add Another Answer
          </button>
        )}

        {/* fill in the blank */}
        {newQuestion?.type === "Fill in the Blanks" &&
          newQuestion?.correctAnswers.map((answer) => (
            <div
              key={answer.id}
              className="input-group mb-2 align-items-center"
            >
              <label htmlFor="wd-quiz-question-points" className="me-2 mb-0">
                Possible Answer
              </label>
              <input
                type="text"
                className="form-control"
                value={answer.text}
                onChange={(e) =>
                  setNewQuestion({
                    ...newQuestion,
                    correctAnswers: newQuestion.correctAnswers.map((a) =>
                      a.id === answer.id ? { ...a, text: e.target.value } : a
                    ),
                  })
                }
              />
              <FaTrash
                className="text-danger ms-2"
                onClick={() =>
                  setNewQuestion({
                    ...newQuestion,
                    correctAnswers: newQuestion.correctAnswers.filter(
                      (a) => a.id !== answer.id
                    ),
                  })
                }
              />
            </div>
          ))}

        {newQuestion?.type === "Fill in the Blanks" && (
          <button
            type="button"
            className="btn btn-light text-danger"
            onClick={() =>
              setNewQuestion({
                ...newQuestion,
                correctAnswers: [
                  ...newQuestion.correctAnswers,
                  {
                    id:
                      (newQuestion.correctAnswers[
                        newQuestion.correctAnswers.length - 1
                      ]?.id || 0) + 1,
                    text: "",
                  },
                ],
              })
            }
          >
            + Add Another Answer
          </button>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-3">
        <button
          type="button"
          className="btn btn-secondary me-2"
          data-bs-dismiss="modal"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleSave}>
          Save Question
        </button>
      </div>
    </div>
  );
}
