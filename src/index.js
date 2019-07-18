import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCB25NDU6iY0UKKwj_LoL9uv2Dl4XU6Cpg",
    authDomain: "aw-note.firebaseapp.com",
    databaseURL: "https://aw-note.firebaseio.com",
    projectId: "aw-note",
    storageBucket: "aw-note.appspot.com",
    messagingSenderId: "229927211134",
    appId: "1:229927211134:web:a508bb3c4391e03f"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
