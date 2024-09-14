export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input
        id="wd-search-assignment"
        type="text"
        placeholder="Search for Assignments"
      />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      {/* <br /> */}
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="/kanbas/courses/1234/assignments/1"
          >
            A1 - ENV + HTML
          </a>
          <div>Multiple Modules | Not available until May 6 at 12:00am |</div>
          <div>
            <b>Due</b> May 13 at 11:59pm | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="/kanbas/courses/1234/assignments/2"
          >
            A2 - CSS + BOOTSTRAP
          </a>
          <div>Multiple Modules | Not available until May 13 at 12:00am |</div>
          <div>
            <b>Due</b> May 20 at 11:59pm | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="/kanbas/courses/1234/assignments/3"
          >
            A3 - JAVASCRIPT + REACT
          </a>
          <div>Multiple Modules | Not available until May 20 at 12:00am |</div>
          <div>
            <b>Due</b> May 27 at 11:59pm | 100 pts
          </div>
        </li>
      </ul>
    </div>
  );
}
