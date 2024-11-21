/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./controls";
import LessonControlButtons from "./lesson-control-buttons";
import ModuleControlButtons from "./module-control-buttons";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setModules,
  updateModule,
  deleteModule,
} from "@/app/kanbas/store/reducers/modulesReducer";
import * as client from "../../client";
import { useCallback, useEffect } from "react";

export default function Modules() {
  const { courseId } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const fetchModules = useCallback(async () => {
    const modules = await client.findModulesForCourse(courseId as string);
    dispatch(setModules(modules));
  }, [courseId, dispatch]);

  const saveModule = async (module: any) => {
    try {
      await client.updateModule(module);
      dispatch(updateModule(module));
    } catch (error) {
      alert("Unable to update module. Please try again.");
    }
  };

  const removeModule = async (moduleId: string) => {
    try {
      await client.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    } catch (error) {
      alert("Unable to delete module. Please try again.");
    }
  };

  useEffect(() => {
    fetchModules();
  }, [fetchModules]);

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => (
          <li
            key={module._id}
            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              {currentUser?.role === "FACULTY" && module.editing && (
                <input
                  type="text"
                  className="form-control w-50 d-inline-block"
                  defaultValue={module.name}
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    saveModule({ ...module, editing: false })
                  }
                />
              )}
              {currentUser?.role === "FACULTY" && (
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId: string) => removeModule(moduleId)}
                />
              )}
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {module.lessons.map((lesson: any) => (
                <li
                  key={lesson._id}
                  className="wd-lesson list-group-item p-3 ps-1"
                >
                  <BsGripVertical className="me-2 fs-3" />
                  {lesson.name}
                  {currentUser?.role === "FACULTY" && <LessonControlButtons />}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
