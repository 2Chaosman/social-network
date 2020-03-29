import s from "../../Navbar.module.css";
import React from "react";

const FriendsItem = (props) => {
    return (
        <div className={s.friendsItem}>
            <div className={s.circle}></div>
            {props.name}
        </div>
    )
}

export default FriendsItem;
