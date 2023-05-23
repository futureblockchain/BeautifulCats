import { Component } from 'react';


import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
  super();
  this.state = {
    dogs: [],
    searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
   .then((response) => response.json())
   .then((users) => this.setState(
    () => {
      return{ dogs:users };
    },
    () => {
      console.log(this.state);
    }
    )
   );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase ();
    
    this.setState(() => {
      return { searchField };
    }
    );
  }
  
  render () {
    console.log('render')

    const {dogs, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredDogs = dogs.filter((dog) => {
      return dog.name.toLocaleLowerCase().includes(searchField)
    });

  return (
    <div className='App'>

    <h1 className='app-title'>Beautiful cats</h1>

    <SearchBox
    className='monsters-search-box'
    onChangeHandler={onSearchChange}
    placeholder='Search cats' />
    <CardList dogs={filteredDogs}/>
    </div>
    );
  }
}

export default App;
