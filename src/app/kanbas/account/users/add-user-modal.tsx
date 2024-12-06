/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import * as client from "../client";

export default function AddUserModal({
  users,
  setUsers,
}: {
  users: any[];
  setUsers: any;
}) {
  const [user, setUser] = useState<any>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    section: "",
    role: "STUDENT",
  });

  const createUser = async () => {
    user.lastActivity = new Date();
    const newUser = await client.createUser(user);
    if (!newUser) {
      alert("Failed to create user. Please try again.");
      return;
    }
    newUser.lastActivity = new Date(newUser.lastActivity);
    setUsers([...users, newUser]);
  };

  return (
    <div
      id="wd-add-user-modal"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Add User
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control mb-2"
                value={user?.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control mb-2"
                value={user?.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control mb-2"
                value={user?.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control mb-2"
                value={user?.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control mb-2"
                value={user?.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <label htmlFor="section" className="form-label">
                Section
              </label>
              <input
                type="text"
                id="section"
                className="form-control mb-2"
                value={user?.section}
                onChange={(e) => setUser({ ...user, section: e.target.value })}
              />
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select
                id="role"
                className="form-select mb-2"
                value={user?.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
                <option value="STUDENT" selected>
                  Student
                </option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Admin</option>
              </select>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={createUser}
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
