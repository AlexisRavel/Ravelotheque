import React, { Suspense } from "react";

import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Library from "./components/library/library";
const Bookshelf = React.lazy(() => import("./components/bookshelf/bookshelf"));
const BookForm = React.lazy(() => import("./components/form/bookForm"))


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Ravelothèque</h1>
        <Router>
          <Suspense fallback={<div>Welcome to the Ravelothèque</div>}>
            <Routes>
              <Route index element={<Bookshelf/>}></Route>
              <Route path='/library' element={<Library/>}></Route>
              <Route path='/library/newBook' element={<BookForm/>}></Route>
            </Routes>
          </Suspense>
        </Router>
      </div>
    )
  }
}


export default App;
