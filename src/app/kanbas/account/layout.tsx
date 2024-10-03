"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div id="wd-account-screen">
      <div className="d-flex">
        <div className="d-none d-md-block" style={{ width: "200px"}}>
          <div
            id="wd-account-navigation"
            className="wd list-group fs-5 rounded-0"
          >
            <Link
              id="wd-account-login-link"
              href="/kanbas/account/login"
              className={`${
                pathname.includes("login") ? "active" : "text-danger"
              } list-group-item border border-0`}
            >
              Login
            </Link>
            <Link
              id="wd-account-signup-link"
              href="/kanbas/account/signup"
              className={`${
                pathname.includes("signup") ? "active" : "text-danger"
              } list-group-item border border-0`}
            >
              Signup
            </Link>
            <Link
              id="wd-account-profile-link"
              href="/kanbas/account/profile"
              className={`${
                pathname.includes("profile") ? "active" : "text-danger"
              } list-group-item border border-0`}
            >
              Profile
            </Link>
          </div>
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
