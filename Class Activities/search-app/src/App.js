import "./App.css";

const listItems = [
  { name: "spider-boy" },
  {
    name: "spider-man",
  },
  {
    name: "spider-punk",
  },
  {
    name: "spider-girl",
  },
];
const showList = () => {
  console.log("stuff");
};

function App() {
  return (
    <div className="App">
      <h1>
        Welcome to the spiderverse, search and find your favourite spiderman
        name!
      </h1>
      <button onClick={showList}>Click me and check the console</button>
      <ul>
        {listItems.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
