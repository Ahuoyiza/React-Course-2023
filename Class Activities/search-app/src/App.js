import { useState } from "react";
import "./App.css";
import Layout from "./Layout";

const spiderPeople = [
  "Miles Morales",
  "Peter B. Parker",
  "Gwen Stacy",
  "Peni Parker",
  "Spider-Ham",
  "Spider-Man Noir",
  "Spider-Ham 2099 (Miguel O'Hara)",
  "Spider-Punk (Hobie Brown)",
  "Spider-Man (Aaron Davis)",
  "Spider-Girl (Anya Corazon)",
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setfilteredItems] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const matchfilteredItems = spiderPeople.filter((people) =>
      people.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfilteredItems(matchfilteredItems);
  };

  return (
    <div className="App">
      <Layout title="spiderverse" nav1="tokens" nav2="store" nav3="movies" />
      <h1>Welcome to the spiderverse</h1>
      <p>
        search and find your favourite people that were in across the
        spiderverse!
      </p>
      <div>
        <input
          type="search"
          onChange={handleSearch}
          placeholder="type to search..."
          value={searchTerm}
        />
        <div>
          <ul>
            {filteredItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
