import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.jpg" height={200} width={200} alt="React.js" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              href="/kanbas/courses/1234/home"
            >
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link href="/kanbas/courses/1234/home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.jpg" height={200} width={200} alt="React.js" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              href="/kanbas/courses/1234/home"
            >
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link href="/kanbas/courses/1234/home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.jpg" height={200} width={200} alt="React.js" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              href="/kanbas/courses/1234/home"
            >
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link href="/kanbas/courses/1234/home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.jpg" height={200} width={200} alt="React.js" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              href="/kanbas/courses/1234/home"
            >
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link href="/kanbas/courses/1234/home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.jpg" height={200} width={200} alt="React.js" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              href="/kanbas/courses/1234/home"
            >
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link href="/kanbas/courses/1234/home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.jpg" height={200} width={200} alt="React.js" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              href="/kanbas/courses/1234/home"
            >
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link href="/kanbas/courses/1234/home">Go</Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <Image src="/images/reactjs.jpg" height={200} width={200} alt="React.js" />
          <div>
            <Link
              className="wd-dashboard-course-link"
              href="/kanbas/courses/1234/home"
            >
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link href="/kanbas/courses/1234/home">Go</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
