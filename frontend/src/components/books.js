import React from "react";
import axios from "axios";

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: null,
        }
    }

    async searchBook() {
        axios.get("/api/books")
        .then(res => this.setState({books: res.data}))
        .catch(function (error) {
            console.log(error.toJSON());
        });
    }

    render() {
        this.searchBook();
        if(this.state.books != null) {
            return (
                <div className="books">
                    {this.state.books.map(book => (
                        <div className="book">
                            <h2>{book.title}</h2>
                            <h3>{book.authorName}</h3>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default Books;