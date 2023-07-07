// import logo from './logo.svg';
import "./App.css";

const listItems = [
  { name: "spder-boy" },
  { name: "spder-man" },
  { name: "spder-punk" },
  { name: "spider-girl" },
];

const showList = () => {
  console.log("stuff");
};

function App() {
  return (
    <div className="App">
      <h1> Welcome to the spiderverse, view the spidey list</h1>
      <button onClick={showList}>click me and show the button</button>
      <ul>
        {listItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
