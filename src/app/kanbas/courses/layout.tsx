"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../database";

function titleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
}

export default function CoursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const page = pathname.split("/")[4];
  const { courseId } = useParams();
  const course = courses.find((course) => course.number === courseId);
  const links = [
    "home",
    "modules",
    "piazza",
    "zoom",
    "assignments",
    "quizzes",
    "grades",
    "people",
  ];

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} {page && `> ${titleCase(page)}`}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block" style={{ width: "200px" }}>
          <div
            id="wd-courses-navigation"
            className="wd list-group fs-5 rounded-0"
          >
            {links.map((link) => (
              <Link
                key={link.toLowerCase()}
                id={`wd-course-${link}-link`}
                href={`/kanbas/courses/${courseId}/${link}`}
                className={`${
                  pathname.includes(link) ? "active" : "text-danger"
                } list-group-item border border-0`}
                prefetch={false}
              >
                {titleCase(link)}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
