/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as client from "./client";
import { setCurrentUser } from "../store/reducers/accountReducer";

export default function Session({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const currentUser = await client.profile();
        dispatch(setCurrentUser(currentUser));
      } catch (err: any) {
        console.error(err);
      }
      setPending(false);
    };

    fetchProfile();
  }, [dispatch]);

  if (!pending) {
    return children;
  }
}
