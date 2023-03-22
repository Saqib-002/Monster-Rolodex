import {Component} from "react"
import './App.css';
import CardList from './components/cardList/cardList.component.jsx'
import SearchBox from "./components/searchBox/searchBox.component";

class App extends Component {
  constructor(){
    super();
    this.state={
      'monsters':[],
      'searchField':''
    };
    this.onSearchChange=this.onSearchChange.bind(this);
  }
  async componentDidMount(){
    // const response=await fetch("https://jsonplaceholder.typicode.com/users").then(res=> res.json());
    const response=[
      {
        id:1,
        name:'a',
        email:'a'
      },
      {
        id:2,
        name:'a',
        email:'a'
      },
      {
        id:3,
        name:'a',
        email:'a'
      },
      {
        id:4,
        name:'a',
        email:'a'
      },
      {
        id:5,
        name:'a',
        email:'a'
      },
      {
        id:6,
        name:'a',
        email:'a'
      },
    ];
    this.setState({"monsters": response});
  }
  onSearchChange(e){
    this.setState({"searchField":e.target.value.toLowerCase()});
  }
  render(){
    const {onSearchChange}=this;
    const filteredMonsters=this.state.monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox className="search-box" onChangeHandler={onSearchChange} placeholder="Search Monster"/>
        <CardList monsters={filteredMonsters} />
      </div>
  );
  }
}

export default App;
