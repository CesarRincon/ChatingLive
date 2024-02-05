import React from "react";
import style from "./ChatCard.module.css";

function ChatCard(props: any) {
  const { chat, chatSelected, setChatSelected } = props;

  const styleChatSelected = chatSelected === chat.id ? style.containerChatCardSelected : style.containerChatCard;


  return (
    <div className={styleChatSelected} onClick={() => setChatSelected(chat.id)}>
      <img src={chat.imageProfile} alt={chat.name} width={30} height={30} />
      <div className={style.contentChatCard}>
        <h5 className={style.chatName}>{chat.name}</h5>
        <div className={style.chatContent}>
          <p className={style.chatMessage}>{chat.lastMessage.message}</p>
          <div className={style.chatContainerHour}>
            {chat.lastMessage.read && (
              <>
                <img
                  src="https://static-00.iconduck.com/assets.00/checkmark-icon-512x426-8re0u9li.png"
                  alt="check"
                  width={10}
                  height={8}
                />
                <img
                  src="https://static-00.iconduck.com/assets.00/checkmark-icon-512x426-8re0u9li.png"
                  alt="check"
                  width={10}
                  height={8}
                />
              </>
            )}
            <p className={style.chatHour}>{chat.lastMessage.hour}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
