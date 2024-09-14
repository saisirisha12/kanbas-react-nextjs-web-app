"use client";

import { useRouter } from "next/navigation";

export default function SignUp() {
  const { push } = useRouter();

  const signup = () => {
    push("/kanbas/account/login");
  };

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <label htmlFor="signup-username">Username</label>
      <br />
      <input id="signup-username"></input>
      <br />
      <label htmlFor="signup-password">Password</label>
      <br />
      <input id="signup-password" type="password"></input>
      <br />
      <label htmlFor="signup-confirm-password">Confirm password</label>
      <br />
      <input id="signup-confirm-password" type="password"></input>
      <br />
      <br />
      <button id="signup-btn" type="button" onClick={signup}>
        Register
      </button>
    </div>
  );
}
