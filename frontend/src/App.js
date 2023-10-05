import React from "react";
import axios from "axios";

import './App.css';
import Header from './components/header';
import Authors from "./components/authors";


import Books from "./components/books";

class App extends React.Component {
  /*
  axios.get("/api/authors")
     .then(res => console.log(res.data))
     .catch(function (error) {
      console.log(error.toJSON());
    });
  */
  constructor(props) {
    super(props)
    this.state = {
      page: "index",
    }
  }

  render() {
    switch (this.state.page) {
      case 'index':
      case 'books':
        return(
          <div className="App">
            <Header changePage={(aff) => this.setState({page: aff})}></Header>
            <Books></Books>
          </div>
        );
      case 'authors':
        return(
          <div className="App">
            <Header changePage={(aff) => this.setState({page: aff})}></Header>
            <Authors></Authors>
          </div>
        );
    }
  }
}


export default App;
