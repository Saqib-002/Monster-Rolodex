import {useState,useEffect} from "react"
import './App.css';
import CardList from './components/cardList/cardList.component.jsx'
import SearchBox from "./components/searchBox/searchBox.component";

const App=()=>{
  const [searchField,setSearchField]=useState('');
  const [monsters,setMonsters]=useState([]);
  const [filteredMonsters,setFilteredMonsters]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(res=> res.json())
    .then((users)=>setMonsters(users));
  },[])
  useEffect(()=>{
    const newFilteredMonsters=monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  },[monsters,searchField])

  
  const onSearchChange=(e)=>{
    setSearchField(e.target.value.toLowerCase());
  }
  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox className="search-box" onChangeHandler={onSearchChange} placeholder="Search Monster"/>
      <CardList monsters={filteredMonsters} />
    </div>
);
}


export default App;
