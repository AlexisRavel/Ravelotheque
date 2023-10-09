import React from "react";

import './App.css';
import Header from './components/header';
import Authors from "./components/authors";
import Editors from "./components/editors";
import Collections from "./components/collections"
import Books from "./components/books";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "index",
    }
  }

  render() {
    switch (this.state.page) {
      case 'authors':
        return(
          <div className="App">
            <Header changePage={(aff) => this.setState({page: aff})}></Header>
            <Authors></Authors>
          </div>
        );
      case 'editors':
        return(
          <div className="App">
            <Header changePage={(aff) => this.setState({page: aff})}></Header>
            <Editors></Editors>
          </div>
        );
      case 'collections':
        return(
          <div className="App">
            <Header changePage={(aff) => this.setState({page: aff})}></Header>
            <Collections></Collections>
          </div>
        );
      case 'index':
      case 'books':
      default:
        return(
          <div className="App">
            <Header changePage={(aff) => this.setState({page: aff})}></Header>
            <Books></Books>
          </div>
        );
    }
  }
}


export default App;
