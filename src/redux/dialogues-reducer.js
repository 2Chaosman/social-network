const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

let initialState = {
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

};

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_POST_MESSAGE:
            state.newMessageText = action.newText
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const newMessageTextActionCreator = (text) => ({type: UPDATE_NEW_POST_MESSAGE, newText: text});

export default dialoguesReducer;