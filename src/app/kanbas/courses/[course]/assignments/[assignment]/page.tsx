export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <form>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <input
            type="text"
            className="form-control"
            id="wd-name"
            defaultValue="A1 - ENV + HTML"
          />
        </div>
        <div className="mb-3">
          <textarea
            id="wd-description"
            className="form-control"
            rows={5}
            defaultValue="The assignment is available online Submit a link to the landing page
            of your Web application running on Netlify. The landing page should
            include the following: Your full name and section Links to each of
            the lab assignments Link to the Kanbas application Links to all
            relevent source code repositories The Kanbas application should
            include a link to navigate back to the landing page."
          ></textarea>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">
            Points
          </label>
          <div className="col-sm-10">
            <input id="wd-points" className="form-control" defaultValue={100} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-group" className="col-sm-2 col-form-label">
            Assignment Group
          </label>
          <div className="col-sm-10">
            <select
              id="wd-group"
              className="form-select"
              defaultValue="assignments"
            >
              <option value="assignments">ASSIGNMENTS</option>
              <option value="option">OPTION</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="wd-display-grade-as"
            className="col-sm-2 col-form-label"
          >
            Display Grade as
          </label>
          <div className="col-sm-10">
            <select
              id="wd-display-grade-as"
              className="form-select"
              defaultValue="percentage"
            >
              <option value="percentage">Percentage</option>
              <option value="option">Option</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="wd-submission-type"
            className="col-sm-2 col-form-label"
          >
            Submission Type
          </label>
          <div className="col-sm-10">
            <div className="border border-1 rounded-1 p-3">
              <select
                id="wd-submission-type"
                className="form-select"
                defaultValue="online"
              >
                <option value="online">Online</option>
                <option value="option">Option</option>
              </select>
              <br />
              <div className="col-sm-10">
                <label className="form-label fw-bold">
                  Online Entry Options
                </label>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-text-entry"
                    name="check-entry"
                  />
                  <label className="form-check-label" htmlFor="wd-text-entry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-website-url"
                    name="check-entry"
                  />
                  <label className="form-check-label" htmlFor="wd-website-url">
                    Website URL
                  </label>
                </div>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-media-recordings"
                    name="check-entry"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-media-recordings"
                  >
                    Media Recordings
                  </label>
                </div>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-student-annotation"
                    name="check-entry"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-student-annotation"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-file-upload"
                    name="check-entry"
                  />
                  <label className="form-check-label" htmlFor="wd-file-upload">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">
            Assign
          </label>
          <div className="col-sm-10">
            <div className="border border-1 rounded-1 p-3">
              <label htmlFor="wd-assign-to" className="form-label fw-bold">
                Assign to
              </label>
              <input
                id="wd-assign-to"
                className="form-control"
                defaultValue="Everyone"
              />
              <label htmlFor="wd-due-date" className="form-label fw-bold mt-3">
                Due
              </label>
              <input
                id="wd-due-date"
                className="form-control"
                type="date"
                defaultValue="2024-05-13"
              />
              <div className="d-flex mt-3">
                <div className="w-50">
                  <label
                    htmlFor="wd-available-from"
                    className="form-label fw-bold"
                  >
                    Available from
                  </label>
                  <input
                    id="wd-available-from"
                    className="form-control"
                    type="date"
                    defaultValue="2024-05-06"
                  />
                </div>
                <div className="w-50">
                  <label htmlFor="wd-until" className="form-label fw-bold">
                    Until
                  </label>
                  <input
                    id="wd-until"
                    className="form-control"
                    type="date"
                    defaultValue=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="float-end">
          <button className="btn btn-secondary me-1">Cancel</button>
          <button className="btn btn-danger">Save</button>
        </div>
      </form>
    </div>
  );
}
