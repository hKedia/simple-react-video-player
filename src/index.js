import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCTdlngOKSvD_TBExTQgirr7sYKYV-olOI';

// Create a new component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take the generated html and put in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));