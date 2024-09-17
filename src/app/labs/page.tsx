import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Sai Vihar Reddy Gunamgari</h1>
      <h2>Fall 2024 Web Dev SEC 01</h2>
      <h2>Labs</h2>
      <ul>
        <li><Link href="/labs/lab1">Lab 1</Link></li>
        <li><Link href="/labs/lab2">Lab 2</Link></li>
        <li><Link href="/labs/lab3">Lab 3</Link></li>
        <li><Link href="/kanbas">Kanbas</Link></li>
        <li><Link id="wd-github" href="https://github.com/ViharReddy/kanbas-react-nextjs-web-app">GitHub</Link></li>
      </ul>
    </div>
  );
}
