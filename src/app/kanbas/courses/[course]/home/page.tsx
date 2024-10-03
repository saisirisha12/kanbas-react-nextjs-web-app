import Modules from "../modules/page";
import CourseStatus from "./status";

export default function Home() {
  return (
    <div id="wd-home" className="d-flex">
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="d-none d-md-block ms-5 me-2">
        <CourseStatus />
      </div>
    </div>
  );
}