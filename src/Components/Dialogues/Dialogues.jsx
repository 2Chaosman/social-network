import React from "react";
import s from './Dialogues.module.css'
import Message from "./Message/Message";
import DialogueItem from "./DialogueItem/DialogueItem";

const Dialogues = (props) => {

    let dialoguesElement = props.dialogues.map(dialogue => <DialogueItem name={dialogue.name} id={dialogue.id}/>);
    let messageElement = props.messages.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogues;