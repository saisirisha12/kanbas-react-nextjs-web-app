/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    redirect("/kanbas/account/profile");
  } else {
    redirect("/kanbas/account/login");
  }
}
