import Link from "next/link";

export default function CoursesLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="wd-kanbas-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <div id="wd-kanbas-courses-nav">
                <Link id="wd-course-home-link" href="/kanbas/courses/1234/home">Home</Link>
                <br />
                <Link id="wd-course-modules-link" href="/kanbas/courses/1234/modules">Modules</Link>
                <br />
                <Link id="wd-course-piazza-link" href="/kanbas/courses/1234/piazza">Piazza</Link>
                <br />
                <Link id="wd-course-zoom-link" href="/kanbas/courses/1234/zoom">Zoom</Link>
                <br />
                <Link id="wd-course-assignments-link" href="/kanbas/courses/1234/assignments">Assignments</Link>
                <br />
                <Link id="wd-course-quizzes-link" href="/kanbas/courses/1234/quizzes">Quizzes</Link>
                <br />
                <Link id="wd-course-grades-link" href="/kanbas/courses/1234/grades">Grades</Link>
                <br />
                <Link id="wd-course-people-link" href="/kanbas/courses/1234/people">People</Link>
                <br />
              </div>
            </td>
            <td valign="top">
              <div>{children}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}