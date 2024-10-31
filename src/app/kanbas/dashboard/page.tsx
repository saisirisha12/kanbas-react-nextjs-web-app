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
import * as db from "../database";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses, course } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  const { enrollments } = db;
  const relevantCourses = courses.filter((course: any) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id &&
        enrollment.course === course.number
    )
  );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => dispatch(addCourse())}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={() => dispatch(updateCourse())}
        >
          Update
        </button>
      </h5>
      <br />
      <input
        type="text"
        defaultValue={course.number}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(setCourse({ ...course, number: e.target.value }))
        }
      />
      <input
        type="text"
        defaultValue={course.name}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(setCourse({ ...course, name: e.target.value }))
        }
      />
      <textarea
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(setCourse({ ...course, description: e.target.value }))
        }
        value={course.description}
      />
      <input
        type="date"
        defaultValue={course.startDate}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(setCourse({ ...course, startDate: e.target.value }))
        }
      />
      <input
        type="date"
        defaultValue={course.endDate}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(setCourse({ ...course, endDate: e.target.value }))
        }
      />
      <input
        type="text"
        defaultValue={course.department}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(setCourse({ ...course, department: e.target.value }))
        }
      />
      <input
        type="number"
        defaultValue={course.credits}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(setCourse({ ...course, credits: parseInt(e.target.value) }))
        }
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({relevantCourses.length})
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
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  href={`/kanbas/courses/${course.number}/home`}
                  prefetch={false}
                >
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
                    <button className="btn btn-primary">Go</button>
                    <button
                      className="btn btn-danger float-end"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(deleteCourse(course._id));
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning float-end me-2"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(setCourse(course));
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
