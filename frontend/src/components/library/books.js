import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: null,
        }
    }

    componentDidMount() {
        axios.get("/api/books")
        .then(res => this.setState({books: res.data}))
    }

    render() {
        if(this.state.books != null) {
            return (
                <div className="books">
                    {this.state.books.map(book => (
                        <div className="book">
                            <h2>{book.title}</h2>
                            <h3>{book.authorName}</h3>
                            <button>Update</button>
                            <button>Delete</button>
                        </div>
                    ))}
                    <div>
                        <Link to='/library/newBook'>Add</Link>
                    </div>
                </div>
            )
        }
    }
}

export default Books;