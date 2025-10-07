//this page is broken on purpose!
//do not do this in your actual apps
export default function BrokenRollercoasterPage() {
  throw new Error("Something bokrer. Funny error message for the devs");
  return (
    <>
      <h1>This rollercoaster is broken.</h1>
      <h2>Safety hazard! Do not ride! ⚠️</h2>
    </>
  );
}
