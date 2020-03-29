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
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-MESSAGE') {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    };
}

window.store = store;

export default store;