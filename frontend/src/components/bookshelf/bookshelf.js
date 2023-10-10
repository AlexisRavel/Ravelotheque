import React from "react";
import {Link} from "react-router-dom";

class Bookshelf extends React.Component {
    render() {
        return (
            <div>
                <h2>Bookshelf</h2>
                <Link to="/library">Library</Link>
            </div>
        )
    }
}

export default Bookshelf;