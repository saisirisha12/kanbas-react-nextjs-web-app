/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import "./styles.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createElement } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarSharp, IoSettingsOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { Provider } from "react-redux";
import store from "./store";
import ProtectedRoute from "./account/protectedRoute";
import Session from "./account/session";

export default function KanbasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname.includes(href);
  };

  const links = [
    {
      label: "Dashboard",
      href: "/kanbas/dashboard",
      icon: AiOutlineDashboard,
      protected: true,
    },
    {
      label: "Courses",
      href: "/kanbas/courses",
      icon: LiaBookSolid,
      protected: true,
    },
    {
      label: "Calendar",
      href: "/kanbas/calendar",
      icon: IoCalendarSharp,
      protected: false,
    },
    { label: "Inbox", href: "/kanbas/inbox", icon: FaInbox, protected: false },
  ];

  const renderLink = (link: any) => (
    <Link
      key={link.href}
      href={link.href}
      className={`${
        isActive(link.href) ? "bg-white text-danger" : "bg-black text-white"
      } list-group-item border-0 text-center`}
    >
      {createElement(link.icon, { className: "fs-1 text-danger" })}
      <br />
      {link.label}
    </Link>
  );

  return (
    <Provider store={store}>
      <Session>
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
            {links.map((link) => {
              if (link.protected) {
                return (
                  <ProtectedRoute key={link.href} link={link}>
                    {renderLink(link)}
                  </ProtectedRoute>
                );
              } else {
                return renderLink(link);
              }
            })}
            <Link
              href="/labs"
              id="wd-labs-link"
              className="list-group-item border-0 text-center bg-black text-white"
            >
              <IoSettingsOutline className="fs-1 text-danger" />
              <br />
              Labs
            </Link>
            <br />
          </div>
          <div className="wd-main-content-offset p-3">{children}</div>
        </div>
      </Session>
    </Provider>
  );
}
