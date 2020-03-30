import dialoguesReducer from "./dialogues-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, World!', likesCount: 3},
                {id: 2, message: 'My first react project', likesCount: 5},
                {id: 2, message: 'My first react project', likesCount: 5},
                {id: 2, message: 'My first react project', likesCount: 5},
                {id: 2, message: 'My first react project', likesCount: 5},
                {id: 2, message: 'My first react project', likesCount: 5},
                {id: 2, message: 'My first react project', likesCount: 5}
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogues: [
                {id: 1, name: 'Sergey', avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 2, name: 'Andrey', avatar: 'https://klike.net/uploads/posts/2019-03/1551511809_6.jpg'},
                {id: 3, name: 'Max', avatar: 'https://klike.net/uploads/posts/2019-03/medium/1551511791_8.jpg'},
                {id: 4, name: 'Dronni', avatar: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_10.jpg'},
                {id: 5, name: 'Tony', avatar: 'https://klike.net/uploads/posts/2019-03/medium/1551511793_14.jpg'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?!'},
                {id: 3, message: 'Can you sell me keys from your tank!'},
                {id: 4, message: 'kill all humans!'}
            ],
            newMessageText: ''

        },
        sidebar: {
            friends: [
                {id: 1, name: "Sergey"},
                {id: 2, name: "Dronni"},
                {id: 3, name: "Tony"},
                {id: 4, name: "Kris"},
                {id: 5, name: "Kimsan"}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialoguesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;