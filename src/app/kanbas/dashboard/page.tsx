/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteCourse, fetchAllCourses } from "../courses/client";
import { findMyCourses } from "../account/client";
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Course } from "../types";
import * as client from "../account/client";

enum ModalType {
  ADD = "ADD",
  EDIT = "EDIT",
}

const CourseModal = dynamic(() => import("./courseModal"), { ssr: false });

export default function Dashboard() {
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [allCourses, setAllCourses] = useState<Course[] | undefined>(undefined);
  const [enrolledCourses, setEnrolledCourses] = useState<Course[] | undefined>(
    undefined
  );
  const [relevantCourses, setRelevantCourses] = useState<Course[]>([]);

  const [selectedCourse, setSelectedCourse] = useState<Course | undefined>(
    undefined
  );

  const [enrolled, setEnrolled] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      router.push("/kanbas/account/login");
    } else {
      if (enrolled) {
        if (!enrolledCourses) {
          findMyCourses(currentUser?._id).then((data) => {
            setEnrolledCourses(data);
            setRelevantCourses(data);
          });
        } else {
          setRelevantCourses(enrolledCourses);
        }
      } else {
        if (!allCourses) {
          fetchAllCourses().then((data) => {
            setAllCourses(data);
            setRelevantCourses(data);
          });
        } else {
          setRelevantCourses(allCourses);
        }
      }
    }
  }, [currentUser, router, enrolled, enrolledCourses, allCourses]);

  const isEnrolled = (c: Course) => {
    return enrolledCourses?.some((course) => course._id === c._id);
  };

  const unenroll = async (c: Course) => {
    try {
      await client.unenrollCourse(currentUser?._id, c._id);
      setEnrolledCourses(
        enrolledCourses?.filter((course) => course._id !== c._id) || []
      );
    } catch (error) {
      alert("Unable to unenroll course. Please try again later.");
    }
  };

  const enroll = async (c: Course) => {
    try {
      await client.enrollCourse(currentUser?._id, c._id);
      setEnrolledCourses([...(enrolledCourses || []), c]);
    } catch (error) {
      alert("Unable to enroll course. Please try again later.");
    }
  };

  const handleAddCourse = () => {
    setSelectedCourse(undefined);
  };

  const handleEditCourse = (course: any) => {
    setSelectedCourse(course);
  };

  const removeCourse = async (courseId: string) => {
    try {
      await deleteCourse(courseId);
      setRelevantCourses(relevantCourses.filter((c) => c._id !== courseId));
    } catch (error) {
      alert("Unable to delete course. Please try again later.");
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
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
        {currentUser?.role === "FACULTY" && (
          <button
            id="wd-add-course-btn"
            className="btn btn-primary float-end"
            data-bs-toggle="modal"
            data-bs-target="#wd-course-dialog"
            onClick={handleAddCourse}
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Course
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
                      href={`/kanbas/courses/${course._id}/home`}
                    >
                      Go
                    </Link>
                  )}
                  {currentUser?.role === "FACULTY" && (
                    <button
                      className="btn btn-danger float-end"
                      onClick={() => removeCourse(course._id)}
                    >
                      Delete
                    </button>
                  )}
                  {currentUser?.role === "FACULTY" && (
                    <button
                      id="wd-edit-course-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#wd-course-dialog"
                      className="btn btn-warning float-end me-2"
                      onClick={() => handleEditCourse(course)}
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
              </div>
            </div>
          ))}
        </div>
      </div>
      <CourseModal
        course={selectedCourse}
        courses={relevantCourses}
        setCourses={setRelevantCourses}
        type={selectedCourse ? ModalType.EDIT : ModalType.ADD}
      />
    </div>
  );
}
