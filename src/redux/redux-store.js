import {combineReducers, createStore} from "redux";
import dialoguesReducer from "./dialogues-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    messagesPage: dialoguesReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store;