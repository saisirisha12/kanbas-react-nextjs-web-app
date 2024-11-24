/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function Courses() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (!currentUser) return redirect("/kanbas/account/login");
  else redirect("/kanbas/dashboard");
}
