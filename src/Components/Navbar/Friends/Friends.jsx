import s from "../Navbar.module.css";
import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {

    let friendsElement = props.friends.map(name => <FriendsItem name={name.name}/>)

    return (
        <div className={s.item}>
            <a>Friends</a>
            <div className={s.friends}>
                {friendsElement}
            </div>
        </div>
    )
}

export default Friends;
