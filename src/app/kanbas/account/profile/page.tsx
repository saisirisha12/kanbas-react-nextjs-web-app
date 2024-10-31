/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../store/reducers/accountReducer";

export default function Profile() {
  const { push } = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  if (!currentUser) {
    push("/kanbas/account/login");
    return;
  }

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
          defaultValue={currentUser.username}
          onChange={(e) =>
            dispatch(
              setCurrentUser({ ...currentUser, username: e.target.value })
            )
          }
        />
        <label className="mb-1 form-label" htmlFor="wd-password">
          Password:
        </label>
        <input
          id="wd-password"
          className="mb-2 form-control"
          type="password"
          defaultValue={currentUser.password}
          onChange={(e) =>
            dispatch(
              setCurrentUser({ ...currentUser, password: e.target.value })
            )
          }
        />
        <label className="mb-1 form-label" htmlFor="wd-firstname">
          First name:
        </label>
        <input
          id="wd-firstname"
          className="mb-2 form-control"
          defaultValue={currentUser.firstName}
          onChange={(e) =>
            dispatch(
              setCurrentUser({ ...currentUser, firstName: e.target.value })
            )
          }
        />
        <label className="mb-1 form-label" htmlFor="wd-lastname">
          Last name:
        </label>
        <input
          id="wd-lastname"
          className="mb-2 form-control"
          defaultValue={currentUser.lastName}
          onChange={(e) =>
            dispatch(
              setCurrentUser({ ...currentUser, lastName: e.target.value })
            )
          }
        />
        <label className="mb-1 form-label" htmlFor="wd-dob">
          Date of birth:
        </label>
        <input
          id="wd-dob"
          className="mb-2 form-control"
          type="date"
          defaultValue={currentUser.dob}
          onChange={(e) =>
            dispatch(setCurrentUser({ ...currentUser, dob: e.target.value }))
          }
        />
        <label className="mb-1 form-label" htmlFor="wd-email">
          Email id:
        </label>
        <input
          id="wd-email"
          className="mb-2 form-control"
          type="email"
          defaultValue={currentUser.email}
          onChange={(e) =>
            dispatch(setCurrentUser({ ...currentUser, email: e.target.value }))
          }
        />
        <label className="mb-1 form-label" htmlFor="wd-role">
          Role:
        </label>
        <select
          id="wd-role"
          className="mb-2 form-select"
          defaultValue={currentUser?.role}
          onChange={(e) =>
            dispatch(setCurrentUser({ ...currentUser, role: e.target.value }))
          }
        >
          <option value="STUDENT">Student</option>
          <option value="FACULTY">Faculty</option>
          <option value="TA">TA</option>
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
