import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <label htmlFor="wd-username">Username:</label>
      <input id="wd-username" defaultValue="alice" />
      <br />
      <label htmlFor="wd-password">Password:</label>
      <input
        id="wd-password"
        defaultValue="password"
        type="password"
      />
      <br />
      <label htmlFor="wd-firstname">First name:</label>
      <input id="wd-firstname" defaultValue="Alice" />
      <br />
      <label htmlFor="wd-lastname">Last name:</label>
      <input id="wd-lastname" defaultValue="Wonderland" />
      <br />
      <label htmlFor="wd-dob">Date of birth:</label>
      <input id="wd-dob" defaultValue="2000-01-01" type="date" />
      <br />
      <label htmlFor="wd-email">Email id:</label>
      <input id="wd-email" defaultValue="alice@wonderland" type="email" />
      <br />
      <select id="wd-role">
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="faculty">Faculty</option>
        <option value="student">Student</option>
      </select>
      <br />
      <Link href="/kanbas/account/login">Sign out</Link>
    </div>
  );
}
