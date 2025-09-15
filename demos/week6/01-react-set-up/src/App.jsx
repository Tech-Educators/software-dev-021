import "./App.css";

function App() {
  //JS
  const welcomeMessage = "Welcome to React!";

  //HTML
  return (
    <>
      <div>
        <h1>{welcomeMessage}</h1>
      </div>
      <div>
        <h2>Another title</h2>
      </div>
    </>
  );
}

//when we are writing components, we will only export ONE element --> component function
//we add the default keyword to our export to make sure we just export this function (App)
export default App;
