import React from "react";

class Header extends React.Component {
    onMenuButton(aff) {
        this.props.changePage(aff);
    }

    render() {
        return(
            <div className="header">
                <div>
                    <h1>Ravelothèque</h1>
                </div>
                <div className="buttons">
                    <button onClick={() => this.onMenuButton('authors')}>Authors</button>
                    <button>Editors</button>
                    <button>Collections</button>
                    <button onClick={() => this.onMenuButton('books')}>Books</button>
                </div>            
            </div>
        )
    }
}

export default Header;