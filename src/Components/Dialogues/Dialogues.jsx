import React from "react";
import s from './Dialogues.module.css'
import Message from "./Message/Message";
import DialogueItem from "./DialogueItem/DialogueItem";

const Dialogues = (props) => {

    let dialoguesElement = props.messagePage.dialogues.map(dialogue => <DialogueItem name={dialogue.name} id={dialogue.id} avatar={dialogue.avatar}/>);
    let messageElement = props.messagePage.messages.map(message => <Message message={message.message}/>)

    let newMessageElement = React.createRef();

    let addMessageActionCreator = () => {
        return {
            type: 'ADD-MESSAGE'
        }
    }

    let addMessage = () => {
         props.dispatch(addMessageActionCreator())
    }

    let newMessageText = () => {
        let text = newMessageElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-MESSAGE', newText: text};
        props.dispatch(action)
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div>
                    <textarea onChange={newMessageText} ref={newMessageElement} value={props.messagePage.newMessageText}></textarea>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogues;