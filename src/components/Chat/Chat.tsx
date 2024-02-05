"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./Chat.module.css";
import HeaderChat from "../HeaderChat/HeaderChat";
import BubbleChat from "../BubbleChat/BubbleChat";

const chat = {
  nombre_contacto: "Lucas",
  id: 3,
  mensajes: [
    {
      tipo: "entrada",
      contenido: "Hola, ¿cómo estás?",
      fecha: "2024-02-04T10:30:00",
      remitente: "contacto",
    },
    {
      tipo: "salida",
      contenido: "¡Hola! Estoy bien, gracias.",
      fecha: "2024-02-04T10:35:00",
      remitente: "usuario",
    },
    {
      tipo: "entrada",
      contenido: "¿Qué has hecho hoy?",
      fecha: "2024-02-04T11:00:00",
      remitente: "contacto",
    },
    {
      tipo: "salida",
      contenido: "No mucho, solo trabajo. ¿Y tú?",
      fecha: "2024-02-04T11:05:00",
      remitente: "usuario",
    },
    {
      tipo: "entrada",
      contenido: "Estoy pensando en salir a dar un paseo más tarde.",
      fecha: "2024-02-04T11:10:00",
      remitente: "contacto",
    },
    {
      tipo: "salida",
      contenido: "No mucho, solo trabajo. ¿Y tú?",
      fecha: "2024-02-04T11:05:00",
      remitente: "usuario",
    },
    {
      tipo: "entrada",
      contenido: "Estoy pensando en salir a dar un paseo más tarde.",
      fecha: "2024-02-04T11:10:00",
      remitente: "contacto",
    },
    {
      tipo: "salida",
      contenido: "No mucho, solo trabajo. ¿Y tú?",
      fecha: "2024-02-04T11:05:00",
      remitente: "usuario",
    },
    {
      tipo: "entrada",
      contenido: "Estoy pensando en salir a dar un paseo más tarde.",
      fecha: "2024-02-04T11:10:00",
      remitente: "contacto",
    },
  ],
};

interface LastMessage {
  tipo: string;
  contenido: string;
  fecha: string;
  remitente: string;
}

export const Chat = () => {
  const chatContainer = useRef(null);
  const chatContentContainer = useRef(null);
  const [data, setData] = useState(chat);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (chatContentContainer.current) {
      chatContainer.current.scrollTo({
        top: chatContainer.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatContentContainer?.current?.childElementCount, data.mensajes.length]);

  const handleSend = () => {
    if (!message) return;
    let messages = data;
    let newMessage: LastMessage = {
      tipo: "salida",
      contenido: message,
      fecha: new Date().toISOString(),
      remitente: "usuario",
    };
    messages.mensajes.push(newMessage);
    setData(messages);
    setMessage("");
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={style.chatContainer}>
      <HeaderChat name={chat.nombre_contacto} />
      <div className={style.chatContent}>
        <div className={style.chatContentContainer} ref={chatContainer}>
          <div className={style.chat} ref={chatContentContainer}>
            {data.mensajes.map((message, i) => {
              return <BubbleChat message={message} key={i} />;
            })}
          </div>
        </div>
        <div className={style.inputContainer}>
          <input
            className={style.textChat}
            type="text"
            placeholder="Escribe algo"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onKeyPress={handleKeyPress}
          />
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3507350/send-icon-icon-md.png"
            alt="Send"
            width={20}
            height={20}
            className={style.iconSend}
            onClick={() => handleSend()}
          />
        </div>
      </div>
    </div>
  );
};
