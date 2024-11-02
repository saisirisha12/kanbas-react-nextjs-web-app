/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourse,
  deleteCourse,
  setCourse,
  updateCourse,
} from "../store/reducers/coursesReducer";
import { useEffect, useState } from "react";
import {
  addEnrollment,
  deleteEnrollment,
} from "../store/reducers/enrollmentsReducer";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses, course } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [enrolled, setEnrolled] = useState(true);
  const [relevantCourses, setRelevantCourses] = useState(courses);

  useEffect(() => {
    if (enrolled) {
      const filteredCourses = courses.filter((course: any) =>
        enrollments.some(
          (enrollment: any) =>
            enrollment.user === currentUser?._id &&
            enrollment.course === course.number
        )
      );
      setRelevantCourses(filteredCourses);
    } else {
      setRelevantCourses(courses);
    }
  }, [enrolled, courses, enrollments, currentUser]);

  const isEnrolled = (c: any) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id && enrollment.course === c.number
    );
  };

  const unenroll = (c: any) => {
    dispatch(
      deleteEnrollment(enrollments.find((e: any) => e.course === c.number)._id)
    );
  };

  const enroll = (c: any) => {
    console.log(c);
    dispatch(
      addEnrollment({
        _id: enrollments[enrollments.length - 1]._id + 1,
        user: currentUser?._id,
        course: c.number,
      })
    );
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      {currentUser?.role === "FACULTY" && (
        <h5>
          <hr />
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={() => {
              dispatch(addCourse());
              enroll(course);
              dispatch(
                setCourse({
                  _id: 0,
                  number: "",
                  name: "",
                  startDate: "",
                  endDate: "",
                  department: "",
                  credits: 0,
                  description: "",
                })
              );
            }}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            id="wd-update-course-click"
            onClick={() => {
              dispatch(updateCourse());
              dispatch(
                setCourse({
                  _id: 0,
                  number: "",
                  name: "",
                  startDate: "",
                  endDate: "",
                  department: "",
                  credits: 0,
                  description: "",
                })
              );
            }}
          >
            Update
          </button>
        </h5>
      )}
      {currentUser?.role === "FACULTY" && (
        <form>
          <input
            type="text"
            value={course.number}
            className="form-control mb-2"
            placeholder="Course Number"
            onChange={(e) =>
              dispatch(setCourse({ ...course, number: e.target.value }))
            }
          />
          <input
            type="text"
            value={course.name}
            className="form-control mb-2"
            placeholder="Course Name"
            onChange={(e) =>
              dispatch(setCourse({ ...course, name: e.target.value }))
            }
          />
          <textarea
            className="form-control mb-2"
            placeholder="Course Description"
            onChange={(e) =>
              dispatch(setCourse({ ...course, description: e.target.value }))
            }
            value={course.description}
          />
          <input
            type="date"
            value={course.startDate}
            className="form-control mb-2"
            placeholder="Start Date"
            onChange={(e) =>
              dispatch(setCourse({ ...course, startDate: e.target.value }))
            }
          />
          <input
            type="date"
            value={course.endDate}
            className="form-control mb-2"
            placeholder="End Date"
            onChange={(e) =>
              dispatch(setCourse({ ...course, endDate: e.target.value }))
            }
          />
          <input
            type="text"
            value={course.department}
            className="form-control mb-2"
            placeholder="Department"
            onChange={(e) =>
              dispatch(setCourse({ ...course, department: e.target.value }))
            }
          />
          <input
            type="number"
            value={course.credits}
            className="form-control mb-2"
            placeholder="Credits"
            onChange={(e) =>
              dispatch(
                setCourse({ ...course, credits: parseInt(e.target.value) })
              )
            }
          />
        </form>
      )}
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({relevantCourses.length})
        {currentUser?.role === "STUDENT" && (
          <button
            className="btn btn-primary float-end"
            id="wd-enrollments-click"
            onClick={() => setEnrolled(!enrolled)}
          >
            Enrollments
          </button>
        )}
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {relevantCourses.map((course: any) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                {/* <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  href={`/kanbas/courses/${course.number}/home`}
                > */}
                <Image
                  src={`/images/${course.number}.jpg`}
                  height={160}
                  width={300}
                  alt={course.number}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    {course.name}
                  </h5>
                  <p
                    className="wd-dashboard-course-title card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}
                  </p>
                  {isEnrolled(course) && (
                    <Link
                      className="btn btn-primary"
                      href={`/kanbas/courses/${course.number}/home`}
                    >
                      Go
                    </Link>
                  )}
                  {currentUser?.role === "FACULTY" && (
                    <button
                      className="btn btn-danger float-end"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(deleteCourse(course._id));
                      }}
                    >
                      Delete
                    </button>
                  )}
                  {currentUser?.role === "FACULTY" && (
                    <button
                      className="btn btn-warning float-end me-2"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(setCourse(course));
                      }}
                    >
                      Edit
                    </button>
                  )}
                  {currentUser?.role === "STUDENT" && isEnrolled(course) && (
                    <button
                      className="btn btn-danger float-end"
                      onClick={() => unenroll(course)}
                    >
                      Unenroll
                    </button>
                  )}
                  {currentUser?.role === "STUDENT" && !isEnrolled(course) && (
                    <button
                      className="btn btn-success float-end"
                      onClick={() => enroll(course)}
                    >
                      Enroll
                    </button>
                  )}
                </div>
                {/* </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
