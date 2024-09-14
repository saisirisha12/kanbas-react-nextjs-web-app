import Link from "next/link";

export default function KanbasLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="wd-kanbas">
      <h1>Kanbas</h1>
      <br />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <div id="wd-kanbas-nav">
                <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a>
                <br />
                <Link href="/kanbas/account" id="wd-account-link">Account</Link>
                <br />
                <Link href="/kanbas/dashboard" id="wd-dashboard-link">Dashboard</Link>
                <br />
                <Link href="/kanbas/courses" id="wd-course-link">Courses</Link>
                <br />
                <Link href="/kanbas/calendar" id="wd-calendar-link">Calendar</Link>
                <br />
                <Link href="/kanbas/inbox" id="wd-inbox-link">Inbox</Link>
                <br />
                <Link href="/labs" id="wd-labs-link">Labs</Link>
                <br />
              </div>
            </td>
            <td valign="top">
              <div>{children}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}