import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class BookForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            author: "",
            editor: "",
            collection: "",
            genre: "",
            listAuthors: [],
            listEditors: [],
            listCollections: [],
        }
    }

    componentDidMount() {
        axios.get("/api/authors")
        .then(res => this.setState({listAuthors: res.data}));
        axios.get("/api/editors")
        .then(res => this.setState({listEditors: res.data}));
        axios.get("/api/collections")
        .then(res => this.setState({listCollections: res.data}));
    }

    onTitleChange=(event) => {
        this.setState({title: event.target.value})
    }
    onAuthorChange=(event) => {
        this.setState({author: event.target.value})
    }
    onEditorChange=(event) => {
        this.setState({editor: event.target.value})
    }
    onCollectionChange=(event) => {
        this.setState({collection: event.target.value})
    }
    onGenreChange=(event) => {
        this.setState({genre: event.target.value})
    }

    addBook=() => {
        if(this.state.title.length > 40 || this.state.title.length === "") {
            alert("The title must not be empty or exceed 40 characters");
            return 1;
        }

        let data = {
            "title": this.state.title,
            "authorName": this.state.author,
            "editorName": this.state.editor,
            "collectionName": this.state.collection,
            "genre": this.state.genre,
        }

        axios.post("/api/books/", data)
    }

    render() {
        return (
            <div className="form">
                <h3>Add book:</h3>
                <form onSubmit={this.addBook}>
                    <label>
                        Tile: 
                        <input type="text" value={this.state.title} onChange={this.onTitleChange} required></input>
                    </label><br></br>

                    <label>
                        Author: 
                        <select value={this.state.author} onChange={this.onAuthorChange}>
                            <option value=""></option>
                            {
                                this.state.listAuthors.map(author => (
                                    <option value={author.name}>{author.name}</option>
                                ))
                            }
                        </select>
                    </label><br></br>

                    <label>
                        Editor: 
                        <select value={this.state.editor} onChange={this.onEditorChange}>
                            <option value=""></option>
                            {
                                this.state.listEditors.map(editor => (
                                    <option value={editor.name}>{editor.name}</option>
                                ))
                            }
                        </select>
                    </label><br></br>

                    <label>
                        Collection: 
                        <select value={this.state.collection} onChange={this.onCollectionChange}>
                            <option value=""></option>
                            {
                                this.state.listCollections.map(collection => (
                                    <option value={collection.name}>{collection.name}</option>
                                ))
                            }
                        </select>
                    </label><br></br>

                    <label>
                        Genre: 
                        <input type="text" value={this.state.genre} onChange={this.onGenreChange}></input>
                    </label><br></br>

                    <input type="submit" value="Add"></input>
                </form>
                <Link to='/library'>Cancel</Link>
            </div>
        )
    }
}


export default BookForm;