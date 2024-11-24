"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/reducers/accountReducer";
import * as client from "../client";

export default function SignUp() {
  const { push } = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const dispatch = useDispatch();

  const confirmPwd = (pwd: string) => {
    if (pwd === password) {
      setRegister(true);
    } else {
      setRegister(false);
    }
  };

  const signup = async () => {
    const currentUser = await client.signup({ username, password });
    dispatch(setCurrentUser(currentUser));
    push("/kanbas/account/profile");
  };

  return (
    <div id="wd-signup-screen">
      <h3>Signup</h3>
      <form className="mb-2" style={{ width: "325px" }}>
        <label className="mb-1" htmlFor="signup-username">
          Username
        </label>
        <input
          id="signup-username"
          className="form-control mb-2"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label className="mb-1" htmlFor="signup-password">
          Password
        </label>
        <input
          id="signup-password"
          className="form-control mb-2"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label className="mb-1" htmlFor="signup-confirm-password">
          Confirm password
        </label>
        <input
          id="signup-confirm-password"
          className="form-control mb-2"
          type="password"
          onChange={(e) => confirmPwd(e.target.value)}
        ></input>
        <button
          id="signup-btn"
          className="btn btn-primary w-100 mt-2"
          type="button"
          onClick={signup}
          disabled={!register}
        >
          Register
        </button>
      </form>
    </div>
  );
}
