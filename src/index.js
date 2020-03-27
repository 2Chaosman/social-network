import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogues = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Max'},
    {id: 4, name: 'Dronni'},
    {id: 5, name: 'Tony'}
];

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?!'},
    {id: 3, message: 'Can you sell me keys from your tank!'},
    {id: 4, message: 'kill all humans!'}
];

let posts = [
    {id: 1, message: 'Hello, World!', likesCount: 3},
    {id: 2, message: 'My first react project', likesCount: 5},
    {id: 2, message: 'My first react project', likesCount: 5},
    {id: 2, message: 'My first react project', likesCount: 5},
    {id: 2, message: 'My first react project', likesCount: 5},
    {id: 2, message: 'My first react project', likesCount: 5},
    {id: 2, message: 'My first react project', likesCount: 5}
]

ReactDOM.render(
    <React.StrictMode>
        <App messages={messages} dialogues={dialogues} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
