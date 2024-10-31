/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  addModule,
  setModule,
} from "@/app/kanbas/store/reducers/modulesReducer";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function ModuleEditor({ dialogTitle }: { dialogTitle: string }) {
  const { courseId } = useParams();
  const { module } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div
      id="wd-add-module-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {dialogTitle}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                defaultValue={module.name}
                onChange={(e) =>
                  dispatch(
                    setModule({
                      ...module,
                      name: e.target.value,
                      course: courseId,
                    })
                  )
                }
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => dispatch(addModule(module))}
            >
              Add Module
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}