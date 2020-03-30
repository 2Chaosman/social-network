import React from "react";
import s from './Dialogues.module.css'
import Message from "./Message/Message";
import DialogueItem from "./DialogueItem/DialogueItem";
import {addMessageActionCreator, newMessageTextActionCreator} from "../../redux/state";

const Dialogues = (props) => {

    let dialoguesElement = props.messagePage.dialogues.map(dialogue => <DialogueItem name={dialogue.name} id={dialogue.id} avatar={dialogue.avatar}/>);
    let messageElement = props.messagePage.messages.map(message => <Message message={message.message}/>)

    let newMessageElement = React.createRef();



    let addMessage = () => {
         props.dispatch(addMessageActionCreator())
    }


    let newMessageText = () => {
        let text = newMessageElement.current.value;
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