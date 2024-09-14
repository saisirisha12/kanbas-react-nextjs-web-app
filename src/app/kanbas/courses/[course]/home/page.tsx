import Modules from "../modules/page";
import CourseStatus from "./status";

export default function Home() {
  return (
    <table id="wd-home">
      <tbody>
        <tr>
          <td valign="top">
            <Modules />
          </td>
          <td valign="top">
            <CourseStatus />
          </td>
        </tr>
      </tbody>
    </table>
  );
}