"use client";

import { useRouter } from "next/navigation";

export default function Profile() {
  const { push } = useRouter();

  const logout = () => {
    push("/kanbas/account/login");
  };

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <form className="mb-2" style={{ width: "325px" }}>
        <label className="mb-1 form-label" htmlFor="wd-username">
          Username:
        </label>
        <input
          id="wd-username"
          className="mb-2 form-control"
          defaultValue="alice"
        />
        <label className="mb-1 form-label" htmlFor="wd-password">
          Password:
        </label>
        <input
          id="wd-password"
          className="mb-2 form-control"
          defaultValue="password"
          type="password"
        />
        <label className="mb-1 form-label" htmlFor="wd-firstname">
          First name:
        </label>
        <input
          id="wd-firstname"
          className="mb-2 form-control"
          defaultValue="Alice"
        />
        <label className="mb-1 form-label" htmlFor="wd-lastname">
          Last name:
        </label>
        <input
          id="wd-lastname"
          className="mb-2 form-control"
          defaultValue="Wonderland"
        />
        <label className="mb-1 form-label" htmlFor="wd-dob">
          Date of birth:
        </label>
        <input
          id="wd-dob"
          className="mb-2 form-control"
          defaultValue="2000-01-01"
          type="date"
        />
        <label className="mb-1 form-label" htmlFor="wd-email">
          Email id:
        </label>
        <input
          id="wd-email"
          className="mb-2 form-control"
          defaultValue="alice@wonderland"
          type="email"
        />
        <label className="mb-1 form-label" htmlFor="wd-role">
          Role:
        </label>
        <select id="wd-role" className="mb-2 form-select" defaultValue="user">
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="faculty">Faculty</option>
          <option value="student">Student</option>
        </select>
        <button
          id="wd-logout-btn"
          className="btn btn-danger w-100 mt-2"
          type="button"
          onClick={logout}
        >
          Logout
        </button>
      </form>
    </div>
  );
}
