import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyCJGkXXBBzqiWl5Q5c56o1p9AVAwWmC2kk",
    authDomain: "messenger-db3e3.firebaseapp.com",
    databaseURL: "https://messenger-db3e3.firebaseio.com",
    projectId: "messenger-db3e3",
    storageBucket: "messenger-db3e3.appspot.com",
    messagingSenderId: "577271492173",
    appId: "1:577271492173:web:e808a28bfe8fcc0e71b604",
    measurementId: "G-7R30RG6GFN"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
