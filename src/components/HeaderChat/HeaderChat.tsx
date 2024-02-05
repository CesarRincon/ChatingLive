import React from "react";
import style from "./HeaderChat.module.css";

function HeaderChat(props: any) {
  const { name } = props;
  return (
    <div className={style.headerContainer}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/74/74472.png"
        alt="profile"
        width={35}
        height={35}
      />
      <h2 className={style.titleName}>{name}</h2>
    </div>
  );
}

export default HeaderChat;
