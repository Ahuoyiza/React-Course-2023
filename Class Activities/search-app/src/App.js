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
  "Spider-Man 209 (Miguel O'Hara)",
  "Spider-Punk (Hobie Brown)",
  "SPider-Man (Aaron Davis)",
  "Spider-Girl (Anya Corazon)",
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredItems = spiderPeople.filter((item) => {
      item.toLowerCase().includes(setSearchTerm.toLowerCase());
    });

    setFilteredItems(filteredItems);
  };

  return (
    <div className="App">
      <Layout title="Spiderverse" nav1="tokens" nav2="store" nav3="movies" />
      <h1>welcome to spiderverse</h1>
      <p>
        Search and find your spider people that were in across the spiderverse
      </p>
      <div>
        <form>
          <input type="search" placeholder="type search here...." value={searchTerm} onChange={handleSearch}/>
        </form>
      </div>
      <div>
        <ul>
          {filteredItems.map((item,index)=>{
            <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
