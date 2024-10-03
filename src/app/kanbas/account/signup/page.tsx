"use client";

import { useRouter } from "next/navigation";

export default function SignUp() {
  const { push } = useRouter();

  const signup = () => {
    push("/kanbas/account/login");
  };

  return (
    <div id="wd-signup-screen">
      <h3>Signup</h3>
      <form className="mb-2" style={{ width: "325px" }}>
      <label className="mb-1" htmlFor="signup-username">Username</label>
      <input id="signup-username" className="form-control mb-2"></input>
      <label className="mb-1" htmlFor="signup-password">Password</label>
      <input id="signup-password" className="form-control mb-2" type="password"></input>
      <label className="mb-1" htmlFor="signup-confirm-password">Confirm password</label>
      <input id="signup-confirm-password" className="form-control mb-2" type="password"></input>
      <button id="signup-btn" className="btn btn-primary w-100 mt-2" type="button" onClick={signup}>
        Register
      </button>
      </form>
    </div>
  );
}
