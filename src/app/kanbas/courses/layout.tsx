"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block" style={{ width: "200px" }}>
          <div
            id="wd-courses-navigation"
            className="wd list-group fs-5 rounded-0"
          >
            <Link
              id="wd-course-home-link"
              href="/kanbas/courses/1234/home"
              className={`${
                pathname.includes("home") ? "active" : "text-danger"
              } list-group-item border border-0`}
            >
              Home
            </Link>
            <Link
              id="wd-course-modules-link"
              href="/kanbas/courses/1234/modules"
              className={`${
                pathname.includes("modules") ? "active" : "text-danger"
              } list-group-item border border-0`}
            >
              Modules
            </Link>
            <Link
              id="wd-course-piazza-link"
              href="/kanbas/courses/1234/piazza"
              className={`${
                pathname.includes("piazza") ? "active" : "text-danger"
              } list-group-item border border-0`}
            >
              Piazza
            </Link>
            <Link
              id="wd-course-zoom-link"
              href="/kanbas/courses/1234/zoom"
              className={`${
                pathname.includes("zoom") ? "active" : "text-danger"
              } list-group-item border border-0`}
            >
              Zoom
            </Link>
            <Link
              id="wd-course-assignments-link"
              href="/kanbas/courses/1234/assignments"
              className={`${
                pathname.includes("assignments") ? "active" : "text-danger"
              } list-group-item border border-0`}
            >
              Assignments
            </Link>
            <Link
              id="wd-course-quizzes-link"
              href="/kanbas/courses/1234/quizzes"
              className={`${
                pathname.includes("quizzes") ? "active" : "text-danger"
              } list-group-item border border-0`}
            >
              Quizzes
            </Link>
            <Link
              id="wd-course-grades-link"
              href="/kanbas/courses/1234/grades"
              className={`${
                pathname.includes("grades") ? "active" : "text-danger"
              } list-group-item border border-0`}
            >
              Grades
            </Link>
            <Link
              id="wd-course-people-link"
              href="/kanbas/courses/1234/people"
              className={`${
                pathname.includes("people") ? "active" : "text-danger"
              } list-group-item border border-0`}
            >
              People
            </Link>
          </div>
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
