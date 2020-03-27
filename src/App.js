import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogues from "./Components/Dialogues/Dialogues";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile posts={props.posts}/>}/>
                    <Route path='/dialogues' render={ () => <Dialogues messages={props.messages} dialogues={props.dialogues}/>}/>
                    {/*<Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
