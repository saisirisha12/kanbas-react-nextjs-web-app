/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useEffect, useState } from "react";
import * as client from "../client";
import { IoCloseSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaCheck, FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function UserDetails({
  userId,
  show,
  setShow,
  updateUser,
  deleteUser,
}: {
  userId: string;
  show: boolean;
  setShow: any;
  updateUser: any;
  deleteUser: any;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [user, setUser] = useState<any>({});
  const [editing, setEditing] = useState(false);

  const fetchUser = useCallback(async () => {
    if (!userId) {
      return;
    }
    const user = await client.findUserById(userId as string);
    setUser(user);
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, [userId, fetchUser]);

  if (!userId) {
    return <div>User not found</div>;
  }

  return (
    <div className="wd-user-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button
        onClick={() => setShow(!show)}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      {!editing && currentUser && currentUser.role === "ADMIN" && (
        <FaPencil
          className="float-end fs-5 mt-2 wd-edit-user"
          onClick={() => setEditing(true)}
        />
      )}
      {editing && (
        <FaCheck
          className="float-end fs-5 mt-2 wd-save-user"
          onClick={() => {
            setEditing(false);
            updateUser(user);
          }}
        />
      )}
      {!editing && (
        <div className="text-danger fs-4 wd-name">
          {user?.firstName} {user?.lastName}
        </div>
      )}
      {user && editing && (
        <input
          className="form-control w-75 wd-edit-name"
          value={`${user?.firstName} ${user?.lastName}`}
          onChange={(e) =>
            setUser({
              ...user,
              firstName: e.target.value.split(" ")[0],
              lastName: e.target.value.split(" ")[1],
            })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateUser(user);
              setEditing(false);
            }
          }}
        />
      )}
      <b>Email:</b>
      {!editing && <span className="wd-email">{user?.email}</span>}
      {user && editing && (
        <input
          type="email"
          className="form-control w-75 wd-edit-email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateUser(user);
              setEditing(false);
            }
          }}
        />
      )}
      <br />
      <b>Roles:</b>
      {!editing && <span className="wd-roles">{user?.role}</span>}
      {user && editing && (
        <select
          id="wd-role"
          className="form-select w-75 wd-edit-role"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        >
          <option value="STUDENT">Student</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Admin</option>
        </select>
      )}
      <br />
      <b>Login ID:</b>
      <span className="wd-login-id">{user?.loginId}</span>
      <br />
      <b>Section:</b>
      <span className="wd-section">{user?.section}</span>
      <br />
      <b>Total Activity:</b>
      <span className="wd-total-activity">{user?.totalActivity}</span>
      <hr />
      {currentUser && currentUser.role === "ADMIN" && (
        <div>
          <button
            className="btn btn-danger float-end wd-delete-user"
            onClick={() => {
              deleteUser(userId);
              setShow(!show);
            }}
          >
            Delete
          </button>
          <button
            className="btn btn-secondary float-start float-end me-2 wd-cancel"
            onClick={() => setShow(!show)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
