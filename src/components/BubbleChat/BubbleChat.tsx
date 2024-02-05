import React from "react";
import style from "./BubbleChat.module.css";

function BubbleChat(props: any) {
  const { message } = props;

  let styleBubble =
    message.tipo === "entrada"
      ? style.bubbleContainer
      : style.bubbleContainerSend;

  return (
    <div className={styleBubble}>
      <p className={style.bubbleMessage}>{message.contenido}</p>
    </div>
  );
}

export default BubbleChat;
