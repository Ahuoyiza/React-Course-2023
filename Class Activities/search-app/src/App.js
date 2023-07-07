import "./App.css";

const List = [
  {
    name: "spider-man",
  },
  {
    name: "spider-girl",
  },
  {
    name: "spider-hulk",
  },
  {
    name: "spider-boy",
  },
];

function App() {
  function listFunction(List) {
List.map(list)
  }
  return (
    <div className="App">
      <h1>
        Welcome to the spiderverse, search and find your favourite spiderman
        name!
      </h1>
      <button onClick={listFunction}>List</button>
    </div>
  );
}

export default App;
