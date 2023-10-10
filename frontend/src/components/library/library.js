import React from "react";

import Header from "./header";
import Books from "./books"
import Authors from "./authors"
import Editors from "./editors"
import Collections from "./collections"

class Library extends React.Component {
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

export default Library;