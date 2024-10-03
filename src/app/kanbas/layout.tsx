"use client";

import "./styles.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarSharp, IoSettingsOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";

export default function KanbasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname.includes(href);
  };

  return (
    <div id="wd-kanbas">
      <div
        id="wd-kanbas-navigation"
        style={{ width: 120 }}
        className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      >
        <a
          href="https://www.northeastern.edu/"
          id="wd-neu-link"
          target="_blank"
          className="list-group-item bg-black border-0 text-center"
        >
          <Image
            src="/images/neu.jpg"
            width="75"
            height="75"
            alt="Northeastern logo"
          />
        </a>
        <br />
        <Link
          href="/kanbas/account"
          id="wd-account-link"
          className={`${
            isActive("/kanbas/account")
              ? "bg-white text-danger"
              : "bg-black text-white"
          } list-group-item border-0 text-center`}
        >
          <FaRegCircleUser
            className={`${
              isActive("/kanbas/account") ? "text-danger" : "text-white"
            } fs-1 text`}
          />
          <br />
          Account
        </Link>
        <br />
        <Link
          href="/kanbas/dashboard"
          id="wd-dashboard-link"
          className={`${
            isActive("/kanbas/dashboard")
              ? "bg-white text-danger"
              : "bg-black text-white"
          } list-group-item border-0 text-center`}
        >
          <AiOutlineDashboard
            className={`${
              isActive("/kanbas/dashboard") ? "text-danger" : "text-white"
            } fs-1 text`}
          />
          <br />
          Dashboard
        </Link>
        <br />
        <Link
          href="/kanbas/courses"
          id="wd-course-link"
          className={`${
            isActive("/kanbas/courses")
              ? "bg-white text-danger"
              : "bg-black text-white"
          } list-group-item border-0 text-center`}
        >
          <LiaBookSolid
            className={`${
              isActive("/kanbas/courses") ? "text-danger" : "text-white"
            } fs-1 text`}
          />
          <br />
          Courses
        </Link>
        <br />
        <Link
          href="/kanbas/calendar"
          id="wd-calendar-link"
          className={`${
            isActive("/kanbas/calendar")
              ? "bg-white text-danger"
              : "bg-black text-white"
          } list-group-item border-0 text-center`}
        >
          <IoCalendarSharp
            className={`${
              isActive("/kanbas/calendar") ? "text-danger" : "text-white"
            } fs-1 text`}
          />
          Calendar
        </Link>
        <br />
        <Link
          href="/kanbas/inbox"
          id="wd-inbox-link"
          className={`${
            isActive("/kanbas/inbox")
              ? "bg-white text-danger"
              : "bg-black text-white"
          } list-group-item border-0 text-center`}
        >
          <FaInbox
            className={`${
              isActive("/kanbas/inbox") ? "text-danger" : "text-white"
            } fs-1 text`}
          />
          <br />
          Inbox
        </Link>
        <br />
        <Link
          href="/labs"
          id="wd-labs-link"
          className="list-group-item border-0 text-center bg-black text-white"
        >
          <IoSettingsOutline className="fs-1 text text-white" />
          <br />
          Labs
        </Link>
        <br />
      </div>
      <div className="wd-main-content-offset p-3">{children}</div>
    </div>
  );
}
