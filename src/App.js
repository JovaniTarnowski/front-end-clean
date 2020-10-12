import React, { Component } from 'react';
import './App.css';
import SearchAppBar from './components/app-bar/app-bar.component';
import TitlebarGridList from './components/book/book.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/book')
      .then(res => res.json())
      .then(books => this.setState({ data: books }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { data, searchField} = this.state;
    const filteredData = data.filter( data => 
      data.title.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <SearchAppBar placeholder='search book...' handleChange={this.handleChange}/>
        <TitlebarGridList data={filteredData}/>
      </div>
    )
  }
}

export default App;
