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
      <h3>Sign in</h3>
      <form>
        <label htmlFor="wd-username">Username</label>
        <br />
        <input id="wd-username"></input>
        <br />
        <label htmlFor="wd-password">Password</label>
        <br />
        <input id="wd-password" type="password"></input>
        <br />
        <br />
        <button id="wd-signin-btn" type="button" onClick={login}>
          Log In
        </button>
      </form>
      <a href="">Forgot username/password?</a>
      <br />
      <Link id="wd-signup-link" href="/kanbas/account/signup">First time user?</Link>
    </div>
  );
}
