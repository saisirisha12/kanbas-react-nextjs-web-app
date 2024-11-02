/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser
    ? [
        {
          label: "Profile",
          href: "/kanbas/account/profile",
        },
      ]
    : [
        {
          label: "Login",
          href: "/kanbas/account/login",
        },
        {
          label: "Signup",
          href: "/kanbas/account/signup",
        },
      ];

  return (
    <div id="wd-account-screen">
      <div className="d-flex">
        <div className="d-none d-md-block" style={{ width: "200px" }}>
          <div
            id="wd-account-navigation"
            className="wd list-group fs-5 rounded-0"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname.includes(link.href) ? "active" : "text-danger"
                } list-group-item border border-0`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
