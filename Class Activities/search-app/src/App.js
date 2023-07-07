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

let value = 0;

function App() {
  function listFunction() {
    console.log("display list");
  }
  return (
    <div className="App">
      <h1>
        Welcome to the spiderverse, search and find your favourite spiderman
        name!
      </h1>
      <button onClick={listFunction}>show</button>
      {List.map((list) => {
        let num= value + 1;
        return <li key={num}>{list.name}</li>;
      })}
    </div>
  );
}

export default App;
