import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <ul>
        <li><Link href="/labs">Labs</Link></li>
        <li><Link href="/labs/lab1">Lab 1</Link></li>
        <li><Link href="/labs/lab2">Lab 2</Link></li>
        <li><Link href="/labs/lab3">Lab 3</Link></li>
        <li><Link href="/kanbas">Kanbas</Link></li>
      </ul>
    </div>
  );
}
