"use client";

export default function Buttons() {
  return (
    <div id="wd-buttons">
      <h5>Buttons</h5>
      <button
        id="wd-all-good"
        onClick={() => alert("Life is Good!")}
        type="button"
      >
        Hello World!
      </button>
    </div>
  );
}
