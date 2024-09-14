export default function AssignmentEditor({
  params,
}: {
  params: { aid: number };
}) {
  return (
    <div id="wd-assignments-editor">
      <form>
        <label htmlFor="wd-name">Assignment name</label>
        <br />
        <input id="wd-name" defaultValue="A1 - ENV + HTML" />
        <br />
        <br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page
          of your Web application running on Netlify. The landing page should
          include the following: Your full name and section Links to each of the
          lab assignments Link to the Kanbas application Links to all relevent
          source code repositories The Kanbas application should include a link
          to navigate back to the landing page.
        </textarea>
        <br />
        <br />
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" defaultValue={100} />
              </td>
            </tr>
            <br />
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group" defaultValue="assignments">
                  <option value="assignments">ASSIGNMENTS</option>
                  <option value="option">OPTION</option>
                </select>
              </td>
            </tr>
            <br />
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as" defaultValue="percentage">
                  <option value="percentage">Percentage</option>
                  <option value="option">Option</option>
                </select>
              </td>
            </tr>
            <br />
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type" defaultValue="online">
                  <option value="online">Online</option>
                  <option value="option">Option</option>
                </select>
              </td>
            </tr>
            <br />
            <tr>
              <td></td>
              <td>
                <div>
                  <label>Online Entry Options</label>
                  <br />
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-text-entry"
                  />
                  <label htmlFor="wd-text-entry">Text Entry</label>
                  <br />
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-website-url"
                  />
                  <label htmlFor="wd-website-url">Website URL</label>
                  <br />
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-media-recordings"
                  />
                  <label htmlFor="wd-media-recordings">Media Recordings</label>
                  <br />
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-student-annotation"
                  />
                  <label htmlFor="wd-student-annotation">
                    Student Annotation
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="check-entry"
                    id="wd-file-upload"
                  />
                  <label htmlFor="wd-file-upload">File Uploads</label>
                </div>
              </td>
            </tr>
            <br />
            <tr>
              <td align="right" valign="top">
                <label>Assign</label>
              </td>
              <td>
                <div>
                  <label htmlFor="wd-assign-to">Assign to</label>
                  <br />
                  <input id="wd-assign-to" defaultValue="Everyone" />
                </div>
              </td>
            </tr>
            <br />
            <tr>
              <td></td>
              <td>
                <div>
                  <label htmlFor="wd-due-date">Due</label>
                  <br />
                  <input
                    id="wd-due-date"
                    type="date"
                    defaultValue="2024-05-13"
                  />
                </div>
              </td>
            </tr>
            <br />
            <tr>
              <td></td>
              <td>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label htmlFor="wd-available-from">
                            Available from
                          </label>
                        </td>
                        <td>
                          <label htmlFor="wd-until">Until</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            id="wd-available-from"
                            type="date"
                            defaultValue="2024-05-06"
                          />
                        </td>
                        <td>
                          <input
                            id="wd-until"
                            type="date"
                            defaultValue="2024-05-20"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <table align="right">
          <tbody>
            <tr>
              <td>
                <div>
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
