// export default function App() {
//   event handler
//   function handleClick() {
//     console.log("Clicked");
//   }

//   return (
//     <>
//       <h1>Events</h1>
//       {/* event listener */}
//       <button onClick={handleClick}>Click me</button>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <h1>Events</h1>
//       {/* event listener and handler inline */}
//       <button
//         onClick={() => {
//           console.log("Clicked");
//         }}
//       >
//         Click me
//       </button>
//     </>
//   );
// }

export default function App() {
  //event handler with parameters
  function handleClick(username) {
    console.log(`${username} clicked`);
  }
  return (
    <>
      <h1>Events</h1>
      {/* event listener */}
      <button
        onClick={function () {
          handleClick("Joe");
        }}
      >
        Click me
      </button>
    </>
  );
}
