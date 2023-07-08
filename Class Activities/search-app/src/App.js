import "./App.css";
import Layout from "./Layout";
import { useState } from "react";

const spiderPeople = [
  "Miles Morales",
  "Peter B. Parker",
  "Gwen Stacy",
  "Peni Parker",
  "Spider-Ham",
  "Spider-Man Noir",
  "Spider-Man 2099 (Miquel O'Hara)",
  "Spider Punk (Hobbie Brown)",
  "Spider-Man (Aron Davis)",
  "spider Girl (Anya Corazon)",
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredItems = spiderPeople.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };
  return (
    <div className="App">
      <Layout title="Spiderverse" Nav1="Home" Nav2="Contact" Nav3="Movies" />
      <h1>Welcome to Spiderverse</h1>
      <p>Search And find your favorite spider man character</p>

      <div>
        <input
          type="search"
          placeholder="search here..."
          value={searchTerm}
          onChange={handleSearch}
        ></input>
      </div>

      <div>
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
