import "./App.css";
import Layout from "./Layout";
import { useState } from "react";

const spiderPeople = [
  "Miles Morales",
  "Peter B. Parker",
  "Gwen Stacy",
  "Peni Parker",
  "Spider-Man",
  "Spider-Man Noir",
  "Spider-Man 2099 (Miguel o' Hara)",
  "Spider-Park (Hobie Brown)",
  "Spider-Man (Aron Davis)",
  "Spider-Girl (Anya Corazon)",
];

function App() {
  const [searchItem, setSearchIterm] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);

  function valueChange(e) {
    setSearchIterm((search) => {
      return e.target.value;
    });
    let content = spiderPeople.filter((spider) => {
      return spider.includes(searchItem);
    });
    setFilteredItem(() => {
      return content;
    });
  }
  return (
    <div className="App">
      <Layout title="Spider Spiderman Spiderman" />
      <h1>Welcome to the Spiderverse</h1>
      <form>
        <input
          placeholder="Search for an item"
          value={searchItem}
          onChange={valueChange}
        />
      </form>
      <ul>
        {filteredItem.map((item)=>{
          return <li>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
