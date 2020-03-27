import React from "react";
import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    let path = '/dialogues/' + props.id;

    return (
        <div className={s.dialogue}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return  <div className={s.message}>{props.message}</div>
}

const Dialogues = (props) => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <DialogueItem name='Sergey' id='1'/>
                <DialogueItem name='Andrey' id='2'/>
                <DialogueItem name='Max' id='3'/>
                <DialogueItem name='Dronni' id='4'/>
                <DialogueItem name='Tony' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hello!'/>
                <Message message='How are you?!'/>
                <Message message='Can you sell me keys from your tank!'/>
                <Message message='kill all humans!'/>
            </div>
        </div>
    )
}

export default Dialogues;