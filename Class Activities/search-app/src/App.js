// import logo from './logo.svg';
import "./App.css";

const listItems = [
  { name: "spider-boy" },
  { name: "spider-man" },
  { name: "spider-punk" },
  { name: "spider-girl" },
];

const showList = () => {
  console.log(listItems);
};
function App() {
  return (
    <div className="App">
      <h1>Welcome to the spiderverse, view the spiderman list!</h1>
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
