import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyC7U7508YZgVgYtXs74FgZO65vQCLY_xqQ';

// create a new component
const App = () => {
  return <div>Hi! This is Manish</div>;
}

//Take this component and put it in html
ReactDOM.render(<App />, document.querySelector('.container'));
