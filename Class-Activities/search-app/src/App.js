import './App.css';
import Layouts from './layout';
import { useState } from 'react';

const spiderPeople = [
  "Miles Mules",
  "Peter P Pauler",
  "Gwen Stacy",
  "Peni Parker",
  "Spider Man 2099(mignel)",
  "Spider Punk(Hobie Brown)",
  "Spider Man(Aaron paris)",
  "Spider Girl(Anya Corazon)",
];

function App () {
const [searchItems, setSearchItems] = useState('');
const [filteredItems, setFilteredItems] = useState([]);
const handleSearch = (e) => {
  const searchItems = e.target.value;
  setSearchItems(searchItems)
  const filteredItems = spiderPeople.filter((item) => item.toLowerCase().includes(searchItems.toLowerCase()))
  setFilteredItems(filteredItems)
}
  

  return (
    <div className="App">
       <h1>welcome to spiderverse</h1>
       <p>search and find your spider people that were in across the spiderverse</p>
      <Layouts title = "spiderverse" nav1="store" nav2= "tokens" nav3= "contactus"/>
      <div>
      <input 
      type='search'
      placeholder='type your search...'
      value={searchItems}
      onChange={handleSearch}
    />
    </div>
     <div>
      <ul>
        {
          filteredItems.map((item, index)=> (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
      </div>
    </div>
   

    
  );
}

export default App;
