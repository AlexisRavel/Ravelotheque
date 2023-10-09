import React from "react";
import axios from "axios";

class Editors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editors: null,
        }
    }

    async searchEditor() {
        axios.get("/api/editors")
        .then(res => this.setState({editors: res.data}))
        .catch(function (error) {
            console.log(error.toJSON());
        });
    }

    render() {
        this.searchEditor();
        if(this.state.editors != null) {
            return (
                <div className="editors">
                    {this.state.editors.map(editor => (
                        <div className="editor">
                            <h2>{editor.name}</h2>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default Editors;