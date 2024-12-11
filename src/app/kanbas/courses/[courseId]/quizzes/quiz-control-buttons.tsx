import React from "react";
import { useParams, useRouter } from "next/navigation";
import { BsThreeDotsVertical } from "react-icons/bs";
import GreenCheckmark from "../modules/green-checkmark";
import RemoveQuizDialog from "./remove-quiz-dialog";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface QuizControlButtonsProps {
  quizId: string;
  published: boolean;
  setPublished: (quizId: string, published: boolean) => void;
}

export default function QuizControlButtons({
  quizId,
  published,
  setPublished,
}: QuizControlButtonsProps) {
  const router = useRouter();
  const { courseId } = useParams();

  // Navigate to Quiz Details screen for editing
  const handleEdit = () => {
    router.push(`/kanbas/courses/${courseId}/quizzes/${quizId}`);
  };

  return (
    <div>
      {published && <GreenCheckmark />}
      {!published && <IoCheckmarkCircleOutline />}
      <button
        className="btn btn-light btn-sm"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <BsThreeDotsVertical />
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" onClick={handleEdit}>
            Edit
          </button>
        </li>
        <li>
          <button
            className="dropdown-item text-danger"
            id="wd-remove-quiz-btn"
            data-bs-toggle="modal"
            data-bs-target={`#wd-remove-quiz-${quizId}-dialog`}
          >
            Delete
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => setPublished(quizId, !published)}
          >
            {published ? "Unpublish" : "Publish"}
          </button>
        </li>
      </ul>
      <RemoveQuizDialog quizId={quizId} />
    </div>
  );
}
