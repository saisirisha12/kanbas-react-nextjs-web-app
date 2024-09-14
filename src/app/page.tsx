import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Sai Vihar Reddy Gunamgari</h1>
      <h2>Fall&apos;24 Web Dev SEC 01</h2>
      <ul>
        <li>
          <Link href="/labs">Labs</Link>
        </li>
        <li>
          <Link href="/kanbas">Kanbas</Link>
        </li>
      </ul>
    </div>
  );
}
