/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/reducers/accountReducer";
import * as client from "../client";
import { useEffect, useState } from "react";

export default function Profile() {
  const { push } = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(currentUser);
  const [logoutRequested, setLogoutRequested] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      push("/kanbas/account/login");
    }
  }, [currentUser, push]);

  useEffect(() => {
    if (logoutRequested) {
      push("/kanbas/account/login");
    }
  }, [logoutRequested, push]);

  const updateProfile = async () => {
    console.log("Updating profile...", profile);
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

  const logout = async () => {
    await client.logout();
    dispatch(setCurrentUser(null));
    setLogoutRequested(true);
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
          defaultValue={profile.username}
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        />
        <label className="mb-1 form-label" htmlFor="wd-password">
          Password:
        </label>
        <input
          id="wd-password"
          className="mb-2 form-control"
          type="password"
          defaultValue={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        />
        <label className="mb-1 form-label" htmlFor="wd-firstname">
          First name:
        </label>
        <input
          id="wd-firstname"
          className="mb-2 form-control"
          defaultValue={profile.firstName}
          onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })
          }
        />
        <label className="mb-1 form-label" htmlFor="wd-lastname">
          Last name:
        </label>
        <input
          id="wd-lastname"
          className="mb-2 form-control"
          defaultValue={profile.lastName}
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        />
        <label className="mb-1 form-label" htmlFor="wd-dob">
          Date of birth:
        </label>
        <input
          id="wd-dob"
          className="mb-2 form-control"
          type="date"
          defaultValue={profile.dob}
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
        />
        <label className="mb-1 form-label" htmlFor="wd-email">
          Email id:
        </label>
        <input
          id="wd-email"
          className="mb-2 form-control"
          type="email"
          defaultValue={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <label className="mb-1 form-label" htmlFor="wd-role">
          Role:
        </label>
        <select
          id="wd-role"
          className="mb-2 form-select"
          defaultValue={profile?.role}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option value="STUDENT">Student</option>
          <option value="FACULTY">Faculty</option>
          <option value="TA">TA</option>
        </select>
        <button
          className="btn btn-primary w-100 mt-2"
          type="button"
          onClick={updateProfile}
        >
          Update
        </button>
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
