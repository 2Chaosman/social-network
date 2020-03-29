import React from "react";
import s from './../Dialogues.module.css';
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    let path = '/dialogues/' + props.id;

    return (
        <div className={s.dialogue}>
            <div className={s.userDescription}>
                <img  src={props.avatar}/>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
};

export default DialogueItem;