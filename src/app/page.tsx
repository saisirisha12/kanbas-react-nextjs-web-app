import Link from "next/link";

export default function Home() {
  const labs = ["lab1", "lab2", "lab3", "lab4", "lab5"];
  return (
    <div>
      <h1>Sai Vihar Reddy Gunamgari</h1>
      <h2>Fall 2024 Web Dev SEC 01</h2>
      <ul>
        <li>
          <Link href="/labs">Labs</Link>
          <ul>
            {labs.map((lab) => (
              <li key={lab}>
                <Link href={`/labs/${lab}`}>
                  {lab.charAt(0).toUpperCase() + lab.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link href="/kanbas">Kanbas</Link>
        </li>
        <li>
          <Link
            id="wd-github-ui"
            href="https://github.com/ViharReddy/kanbas-react-nextjs-web-app"
          >
            GitHub (Client)
          </Link>
        </li>
        <li>
          <Link
            id="wd-github-api"
            href="https://github.com/ViharReddy/kanbas-node-server-app"
          >
            GitHub (Server)
          </Link>
        </li>
        <li>
          <Link
            id="wd-server-url"
            href="https://kanbas-node-server-app-dmgk.onrender.com"
          >
            Server (Deployed on Render.com)
          </Link>
        </li>
      </ul>
    </div>
  );
}
