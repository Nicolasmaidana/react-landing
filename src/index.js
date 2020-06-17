import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
      
      <img
        src="/"
        className="align-top"
        alt="purete"
      />
      </Navbar.Brand>
    </Navbar>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
