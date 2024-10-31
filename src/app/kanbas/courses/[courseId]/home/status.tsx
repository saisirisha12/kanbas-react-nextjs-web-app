/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AiOutlineBell } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FaFileImport } from "react-icons/fa6";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdBarChart, MdDoNotDisturbAlt } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { useSelector } from "react-redux";

export default function CourseStatus() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        {currentUser?.role === "FACULTY" && (
          <div className="w-50 pe-1">
            <button className="btn btn-lg btn-secondary w-100 text-nowrap">
              <MdDoNotDisturbAlt className="me-2 fs-5" />
              Unpublish
            </button>
          </div>
        )}
        {currentUser?.role === "FACULTY" && (
          <div className="w-50">
            <button className="btn btn-lg btn-success w-100">
              <FaCheckCircle className="me-2 fs-5" />
              Publish
            </button>
          </div>
        )}
      </div>
      <br />
      {currentUser?.role === "FACULTY" && (
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <FaFileImport className="me-2 fs-5" />
          Import Existing Content
        </button>
      )}
      {currentUser?.role === "FACULTY" && (
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" />
          Import from Commons
        </button>
      )}
      {currentUser?.role === "FACULTY" && (
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <BiTargetLock className="me-2 fs-5" />
          Choose Home Page
        </button>
      )}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdBarChart className="me-2 fs-5" />
        View Course Stream
      </button>
      {currentUser?.role === "FACULTY" && (
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <TbSpeakerphone className="me-2 fs-5" />
          New Announcement
        </button>
      )}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdBarChart className="me-2 fs-5" />
        New Analytics
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineBell className="me-2 fs-5" />
        View Course Notifications
      </button>
    </div>
  );
}
