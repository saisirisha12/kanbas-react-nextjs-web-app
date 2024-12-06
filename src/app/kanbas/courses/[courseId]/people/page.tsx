"use client";

import { useParams } from "next/navigation";
import Users from "@/app/kanbas/account/users/page";

export default function PeopleTable() {
  const { courseId } = useParams();

  if (!courseId) {
    return null;
  }

  return <Users courseId={courseId as string} />;
}
