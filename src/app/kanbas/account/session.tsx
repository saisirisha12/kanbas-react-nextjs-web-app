/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as client from "./client";
import { setCurrentUser } from "../store/reducers/accountReducer";

export default function Session({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const dispatch = useDispatch();
  const [pending, setPending] = useState(true);

  const fetchProfile = useCallback(() => {
    client
      .profile()
      .then((user) => {
        dispatch(setCurrentUser(user));
        setPending(false);
      })
      .catch(() => {
        setPending(false);
      });
  }, [dispatch]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (pending) {
    return <div>Loading...</div>;
  }

  return children;
}
