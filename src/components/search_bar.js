import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange} />;
    }

    // Event handler for input
    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;