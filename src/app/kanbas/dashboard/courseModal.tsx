/* eslint-disable @typescript-eslint/no-explicit-any */

import { createRef, useEffect, useState } from "react";
import { createCourse } from "../account/client";
import { useSelector } from "react-redux";
import { Modal } from "bootstrap";
import { updateCourse } from "../courses/client";

enum ModalType {
  ADD = "ADD",
  EDIT = "EDIT",
}

interface Course {
  _id?: string;
  number: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
}

interface CourseModalProps {
  course?: Course;
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<any[]>>;
  type: ModalType;
}

export default function CourseModal({
  course,
  courses,
  setCourses,
  type,
}: CourseModalProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [formValues, setFormValues] = useState<Course>({
    number: course?.number || "",
    name: course?.name || "",
    description: course?.description || "",
    startDate: course?.startDate || "",
    endDate: course?.endDate || "",
    department: course?.department || "",
    credits: course?.credits || 0,
  });
  const modalRef = createRef<HTMLDivElement>();

  useEffect(() => {
    setFormValues({
      _id: course?._id,
      number: course?.number || "",
      name: course?.name || "",
      description: course?.description || "",
      startDate: course?.startDate || "",
      endDate: course?.endDate || "",
      department: course?.department || "",
      credits: course?.credits || 0,
    });
  }, [course]);

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: id === "credits" ? parseInt(value, 10) || 0 : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      !formValues.number ||
      !formValues.name ||
      !formValues.startDate ||
      !formValues.endDate ||
      !formValues.department ||
      !formValues.credits
    ) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      if (type === ModalType.ADD) {
        const newCourse = await createCourse(formValues, currentUser._id);
        setCourses([...courses, newCourse]);
      } else if (type === ModalType.EDIT) {
        const newCourse = await updateCourse({
          ...formValues,
          _id: course?._id,
        });
        setCourses(
          courses.map((c) => (c._id === newCourse._id ? newCourse : c))
        );
      }
      setFormValues({
        number: "",
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        department: "",
        credits: 0,
      });
      if (modalRef.current) {
        const modalInstance =
          Modal.getInstance(modalRef.current) || new Modal(modalRef.current);
        modalInstance?.hide();
      }
    } catch (error) {
      alert(
        `Unable to ${
          type === ModalType.ADD ? "create" : "update"
        } course. Please try again.`
      );
    }
  };

  return (
    <div
      id="wd-course-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      ref={modalRef}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {type === ModalType.ADD ? "Add Course" : "Edit Course"}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <label htmlFor="number" className="form-label">
                Course Number
              </label>
              <input
                type="text"
                id="number"
                className="form-control mb-2"
                value={formValues?.number}
                onChange={handleInputChange}
              />
              <label htmlFor="name" className="form-label">
                Course Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control mb-2"
                value={formValues?.name}
                onChange={handleInputChange}
              />
              <label htmlFor="description" className="form-label">
                Course Description
              </label>
              <textarea
                id="description"
                className="form-control mb-2"
                value={formValues?.description}
                onChange={handleInputChange}
              />
              <label htmlFor="startDate" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="form-control mb-2"
                value={formValues?.startDate}
                onChange={handleInputChange}
              />
              <label htmlFor="endDate" className="form-label">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                className="form-control mb-2"
                value={formValues?.endDate}
                onChange={handleInputChange}
              />
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <input
                type="text"
                id="department"
                className="form-control mb-2"
                value={formValues?.department}
                onChange={handleInputChange}
              />
              <label htmlFor="credits" className="form-label">
                Credits
              </label>
              <input
                type="number"
                id="credits"
                className="form-control mb-2"
                value={formValues?.credits}
                onChange={handleInputChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-primary mt-2" type="submit">
                {type === ModalType.ADD ? "Add Course" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
