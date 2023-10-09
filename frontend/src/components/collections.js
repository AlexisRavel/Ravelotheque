import React from "react";
import axios from "axios";

class Collections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: null,
        }
    }

    async searchCollection() {
        axios.get("/api/collections")
        .then(res => this.setState({collections: res.data}))
        .catch(function (error) {
            console.log(error.toJSON());
        });
    }

    render() {
        this.searchCollection();
        if(this.state.collections != null) {
            return (
                <div className="collections">
                    {this.state.collections.map(collection => (
                        <div className="collection">
                            <h2>{collection.name}</h2>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default Collections;