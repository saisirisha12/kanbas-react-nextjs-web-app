import { useState } from "react";

export default function EventObject() {
  const [event, setEvent] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    event.target = event.target.outerHTML;
    delete event.view;
    setEvent(event);
  };

  return (
    <div>
      <h2>Event Object</h2>
      <button
        onClick={(event) => handleClick(event)}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr />
    </div>
  );
}
