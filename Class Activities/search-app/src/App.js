// // import logo from './logo.svg';
// import './App.css';

// const listItems = [
//   { name: "spider-boy" },
//   { name: "spider-man" },
//   { name: "spider-punk" },
//   { name: "spider-girl" },
// ];

// const showList = () => {
//   console.log("web")
// };

// function App() {
//   return (
//     <div className="App">
//         <h1>Welcome to the spiderverse, search and find your favourite spiderman name!</h1>
//     <button onclick={showList}> Click me and check the console</button>
//     <ul>
//       {listItems.map((item) => (
//         <li>{item.name}</li>
//       ))}
//     </ul>
//     </div>
//   ); 
// }

// export default App;
import './App.css';
import Layout from './Layout';
import {useState} from 'react';

const spiderPeople = [
  "Miles Morales",
  "peter B. Parker",
  "Gwen Stacy",
  "Peni Parker",
  "Spider-Ham",
  "Spider-Man Noir",
  "Spider-Man 2099 (Miguel O'Hara)",
  "Spider-Punk (Hobie Brown)",
  "Spider-Man (Aaron Davis)",
  "Spider-Girl (Anya Corazon)"
];
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredItems = spiderPeople.filter((item) => 
      item.toLowerCase().includes(setSearchTerm.toLowerCase())
    );
    setFilteredItems(filteredItems);
  }
  return(
    <div className = "App"> 
    <Layout title= "Spiderverse" nav1= "Store" nav2= "Tokens" nav3= "contact us"/>
      <h1>Welcome to the Spiderverse</h1>
      <p>Search and find your spider people that are across the spiderverse</p>
      
      <div>
    <input 
      type='search'
      placeholder='type to search here...'
      value={searchTerm}
      onChange={handleSearch}
    />
      </div>
      <div>
        <ul>
          {
            filteredItems.map((item, index) => (
              <li key = {index}>{item}</li>
            ))

          }
        </ul>
      </div>
    </div>
  
  );
}

export default App;
