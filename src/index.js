import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component
const App = () => {
    return <div>Hi!</div>;
}

// Take the generated html and put in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));