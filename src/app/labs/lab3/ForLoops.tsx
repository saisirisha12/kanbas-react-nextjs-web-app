export default function ForLoops() {
  const stringArray1 = ["string1", "string3"];
  const stringArray2 = [];
  for (let i = 0; i < stringArray1.length; i++) {
    stringArray2.push(stringArray1[i].toUpperCase());
  }
  
  return (
    <div id="wd-for-loops">
      <h4>Looping through arrays</h4>
      stringArray2 = { stringArray2 } <hr />
    </div>
  );
}