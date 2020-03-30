import React from "react";
import s from './Dialogues.module.css'
import Message from "./Message/Message";
import DialogueItem from "./DialogueItem/DialogueItem";
import {addMessageActionCreator, newMessageTextActionCreator} from "../../redux/dialogues-reducer";

const Dialogues = (props) => {
    let dialoguesElement = props.messagePage.dialogues.map(dialogue => <DialogueItem name={dialogue.name} id={dialogue.id} avatar={dialogue.avatar}/>);
    let messageElement = props.messagePage.messages.map(message => <Message message={message.message}/>)

    let addMessage = () => {
         props.dispatch(addMessageActionCreator())
    }


    let newMessageText = (event) => {
        let text = event.target.value;
        props.dispatch(newMessageTextActionCreator(text))
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div>
                    <textarea onChange={newMessageText} value={props.messagePage.newMessageText}></textarea>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogues;