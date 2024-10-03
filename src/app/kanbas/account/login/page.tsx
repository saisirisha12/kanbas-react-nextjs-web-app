"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const { push } = useRouter();

  const login = () => {
    push("/kanbas/dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h3>Login</h3>
      <form className="mb-2" style={{ width: "325px" }}>
        <label className="mb-1" htmlFor="wd-username">
          Username
        </label>
        <input id="wd-username" className="form-control mb-2"></input>
        <label className="mb-1" htmlFor="wd-password">
          Password
        </label>
        <input
          id="wd-password"
          className="form-control mb-2"
          type="password"
        ></input>
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
