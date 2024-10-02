"use client";

import { usePathname } from "next/navigation";

export default function LabsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            id="wd-a1"
            href="/labs/lab1"
            className={`nav-link ${pathname.includes("lab1") ? "active" : ""}`}
          >
            Lab 1
          </a>
        </li>
        <li className="nav-item">
          <a
            id="wd-a2"
            href="/labs/lab2"
            className={`nav-link ${pathname.includes("lab2") ? "active" : ""}`}
          >
            Lab 2
          </a>
        </li>
        <li className="nav-item">
          <a
            id="wd-a3"
            href="/labs/lab3"
            className={`nav-link ${pathname.includes("lab3") ? "active" : ""}`}
          >
            Lab 3
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-k" href="/kanbas" className="nav-link">
            Kanbas
          </a>
        </li>
        <li className="nav-item">
          <a
            id="wd-github"
            className="nav-link"
            href="https://github.com/ViharReddy/kanbas-react-nextjs-web-app"
          >
            My GitHub
          </a>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
}
