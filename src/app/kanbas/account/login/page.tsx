/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/reducers/accountReducer";
import * as client from "../client";

export default function Login() {
  const { push } = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const login = async () => {
    const user = await client.login(credentials);
    if (!user || "message" in user) {
      alert("Invalid username or password, please try again.");
      return;
    }
    dispatch(setCurrentUser(user));
    push("/kanbas/dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h3>Login</h3>
      <form className="mb-2" style={{ width: "325px" }}>
        <label className="mb-1" htmlFor="wd-username">
          Username
        </label>
        <input
          id="wd-username"
          className="form-control mb-2"
          defaultValue={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <label className="mb-1" htmlFor="wd-password">
          Password
        </label>
        <input
          id="wd-password"
          className="form-control mb-2"
          type="password"
          defaultValue={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button
          id="wd-signin-btn"
          className="btn btn-primary w-100 mt-2"
          type="button"
          onClick={login}
        >
          Login
        </button>
      </form>
      <div className="mb-1">
        <a href="">Forgot username/password?</a>
      </div>
      <div>
        <Link id="wd-signup-link" href="/kanbas/account/signup">
          First time user?
        </Link>
      </div>
    </div>
  );
}
