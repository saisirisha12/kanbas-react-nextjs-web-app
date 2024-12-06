/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useEffect, useState } from "react";
import { User } from "../../types";
import { FaUserCircle } from "react-icons/fa";
import * as client from "../client";
import * as courseClient from "../../courses/client";
import { formatDateTime } from "../../courses/[courseId]/assignments/page";
import UserDetails from "./details";
import dynamic from "next/dynamic";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";

const AddUserModal = dynamic(() => import("./add-user-modal"), { ssr: false });

interface UserProps {
  courseId?: string;
}

export default function Users({ courseId }: UserProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [users, setUsers] = useState<User[]>([]);
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [userId, setUserId] = useState("");

  const displayUserDetails = (userId: string) => {
    setUserId(userId);
    setShowDetails(true);
  };

  const fetchUsers = useCallback(async () => {
    if (courseId) {
      const enrolledUsers = await courseClient.findUsersForCourse(courseId);
      enrolledUsers.map((user: any) => {
        user.lastActivity = new Date(user.lastActivity);
      });
      setUsers(enrolledUsers);
    } else {
      const allUsers = await client.findAllUsers();
      allUsers.map((user: any) => {
        user.lastActivity = new Date(user.lastActivity);
      });
      setUsers(allUsers);
    }
  }, [courseId]);

  const filterUsersByRole = useCallback(
    async (role: string) => {
      setRole(role);
      if (role) {
        const users = await client.findUsersByRole(role);
        users.map((user: any) => {
          user.lastActivity = new Date(user.lastActivity);
        });
        setUsers(users);
      } else {
        fetchUsers();
      }
    },
    [fetchUsers]
  );

  const filterUsersBySearch = useCallback(
    async (search: string) => {
      setSearch(search);
      if (search) {
        const users = await client.findUsersByPartialName(search);
        users.map((user: any) => {
          user.lastActivity = new Date(user.lastActivity);
        });
        setUsers(users);
      } else {
        fetchUsers();
      }
    },
    [fetchUsers]
  );

  const updateUser = async (user: User) => {
    const updatedUser = await client.updateUser(user);
    updatedUser.lastActivity = new Date(updatedUser.lastActivity);
    const updatedUsers = users.map((u) =>
      u._id === updatedUser._id ? updatedUser : u
    );
    setUsers(updatedUsers);
  };

  const deleteUser = async (userId: string) => {
    await client.deleteUser(userId);
    const updatedUsers = users.filter((user) => user._id !== userId);
    setUsers(updatedUsers);
  };

  useEffect(() => {
    filterUsersByRole(role);
  }, [filterUsersByRole, role]);

  useEffect(() => {
    filterUsersBySearch(search);
  }, [filterUsersBySearch, search]);

  return (
    <div id="wd-users" className="d-flex">
      <div className="d-flex row">
        <div>
          <h1 className="float-start">Users</h1>
          {currentUser && currentUser.role === "ADMIN" && (
            <button
              className="btn btn-primary float-end"
              data-bs-toggle="modal"
              data-bs-target="#wd-add-user-modal"
            >
              <FaPlus className="me-2" />
              User
            </button>
          )}
        </div>
        <input
          className="form-control float-start w-25 me-2 wd-search"
          placeholder="Search by name"
          value={search}
          onChange={(e) => filterUsersBySearch(e.target.value)}
        />
        <select
          className="form-select float-start w-25 wd-select-role"
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
        >
          <option value="">All</option>
          <option value="ADMIN">Administrators</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Students</option>
        </select>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Login ID</th>
              <th>Section</th>
              <th>Role</th>
              <th>Last Activity</th>
              <th>Total Activity</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <a
                    onClick={() => displayUserDetails(user._id)}
                    className="text-decoration-none"
                    role="button"
                  >
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName}</span>{" "}
                    <span className="wd-last-name">{user.lastName}</span>
                  </a>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">
                  {user?.lastActivity !== null
                    ? formatDateTime(user.lastActivity.toISOString())
                    : "--"}
                </td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDetails && (
        <div className="d-flex row">
          <UserDetails
            userId={userId}
            show={showDetails}
            setShow={setShowDetails}
            updateUser={updateUser}
            deleteUser={deleteUser}
          />
        </div>
      )}
      <AddUserModal users={users} setUsers={setUsers} />
    </div>
  );
}
