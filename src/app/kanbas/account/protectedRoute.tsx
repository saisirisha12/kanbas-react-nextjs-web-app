/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createElement } from "react";
import { useSelector } from "react-redux";

export default function ProtectedRoute({
  children,
  link,
}: Readonly<{
  children: React.ReactNode;
  link: any;
}>) {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname.includes(href);
  };
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  console.log(currentUser);

  if (currentUser) {
    return children;
  } else {
    return (
      <Link
        key={link.href}
        href="/kanbas/account/login"
        className={`${
          isActive(link.href) ? "bg-white text-danger" : "bg-black text-white"
        } list-group-item border-0 text-center`}
        prefetch={false}
      >
        {createElement(link.icon, { className: "fs-1 text-danger" })}
        <br />
        {link.label}
      </Link>
    );
  }
}
