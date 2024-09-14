import Link from "next/link";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="wd-account-screen">
      <h1>Account</h1>
      <br />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <div id="wd-account-navigation">
                <Link href="/kanbas/account/login">Login</Link>
                <br />
                <Link href="/kanbas/account/signup">Signup</Link>
                <br />
                <Link href="/kanbas/account/profile">Profile</Link>
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
