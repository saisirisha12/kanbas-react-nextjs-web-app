"use client";

import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import store from "./store";

export default function LabsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const labs = ["lab1", "lab2", "lab3", "lab4", "lab5"];
  return (
    <Provider store={store}>
      <div id="wd-labs">
        <h1>Labs</h1>
        <ul className="nav nav-pills">
          {labs.map((lab) => (
            <li className="nav-item" key={lab}>
              <a
                id={`wd-${lab}`}
                href={`/labs/${lab}`}
                className={`nav-link ${pathname.includes(lab) ? "active" : ""}`}
              >
                {lab.charAt(0).toUpperCase() + lab.slice(1)}
              </a>
            </li>
          ))}
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
    </Provider>
  );
}
