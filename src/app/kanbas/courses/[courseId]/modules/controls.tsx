/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./green-checkmark";
import { PiProhibit } from "react-icons/pi";
import ModuleEditor from "./editor";
import { useSelector } from "react-redux";

export default function ModulesControls() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {currentUser?.role === "FACULTY" && (
        <button
          id="wd-add-module-btn"
          className="btn btn-lg btn-danger me-1 float-end"
          data-bs-toggle="modal"
          data-bs-target="#wd-add-module-dialog"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Module
        </button>
      )}
      {currentUser?.role === "FACULTY" && (
        <div className="dropdown d-inline me-1 float-end">
          <button
            id="wd-publish-all-btn"
            className="btn btn-lg btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            <GreenCheckmark />
            Publish All
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                id="wd-publish-all-modules-and-items-btn"
                className="dropdown-item"
                href="#"
              >
                <GreenCheckmark />
                Publish all modules and items
              </a>
            </li>
            <li>
              <a
                id="wd-publish-modules-only-button"
                className="dropdown-item"
                href="#"
              >
                <GreenCheckmark />
                Publish modules only
              </a>
            </li>
            <li>
              <a
                id="wd-unpublish-all-modules-and-items"
                className="dropdown-item"
                href="#"
              >
                <PiProhibit size={20} className="me-1" />
                Unpublish all modules and items
              </a>
            </li>
            <li>
              <a
                id="wd-unpublish-modules-only"
                className="dropdown-item"
                href="#"
              >
                <PiProhibit size={20} className="me-1" />
                Unpublish modules only
              </a>
            </li>
          </ul>
        </div>
      )}
      {currentUser?.role === "FACULTY" && (
        <button
          id="wd-view-progress"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          View Progress
        </button>
      )}
      <button
        id="wd-collapse-all"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        Collapse All
      </button>
      <ModuleEditor dialogTitle="Add Module" />
    </div>
  );
}
