let newElement = <h1>This is a new element!</h1>;
{
  /* Pass value of hiker's name to the welcomePage element */
}
let hikersName = "Mo";
let greeting = <h1>Welcome, {hikersName}!</h1>;

function App() {
  return (
    <div>
      <h1>Welcome, {hikersName}!</h1>
      <p>This is a JSX example.</p>
    </div>
  );
}

// Render the App component into the DOM
ReactDOM.render(<App />, document.getElementById("root"));
