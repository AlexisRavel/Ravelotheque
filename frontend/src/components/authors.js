import React from "react";
import axios from "axios";

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: null,
        }
    }

    async searchAuthor() {
        axios.get("/api/authors")
        .then(res => this.setState({authors: res.data}))
        .catch(function (error) {
            console.log(error.toJSON());
        });
    }

    render() {
        this.searchAuthor();
        if(this.state.authors != null) {
            return (
                <div className="authors">
                    {this.state.authors.map(author => (
                        <div className="author">
                            <h2>{author.name}</h2>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default Authors;