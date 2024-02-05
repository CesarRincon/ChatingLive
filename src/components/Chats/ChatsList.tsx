"use client";
import React, { useState } from "react";
import ChatCard from "../ChatCard/ChatCard";
import style from "./ChatsList.module.css";

const chats = [
  {
    id: "1",
    name: "César",
    imageProfile: "https://cdn-icons-png.flaticon.com/512/74/74472.png",
    lastMessage: {
      message: "Hola",
      date: "2/02/2024",
      hour: "13:00",
      read: true,
    },
  },
  {
    id: "2",
    name: "Danilo",
    imageProfile: "https://cdn-icons-png.flaticon.com/512/74/74472.png",
    lastMessage: {
      message: "Pelotudo",
      date: "2/01/2024",
      hour: "13:00",
      read: true,
    },
  },
  {
    id: "3",
    name: "Lucas",
    imageProfile: "https://cdn-icons-png.flaticon.com/512/74/74472.png",
    lastMessage: {
      message: "Wacho",
      date: "23/01/2024",
      hour: "13:00",
      read: true,
    },
  },
];

interface Chats {
  id: string;
  name: string;
  imageProfile: string;
  lastMessage: {
    message: string;
    date: string;
    hour: string;
    read: boolean;
  };
}

export const ChatsList = () => {
  const [data, setData] = useState<Chats[]>(chats);
  const [chatSelected, setChatSelected] = useState<number | null>(null);


  const handleChange = (value: string) => {
    let search = chats.filter((chat) => chat.name.toLowerCase().includes(value.toLowerCase()));
    setData(search);
  };

  return (
    <section className={style.containerChatList}>
      <div>
        <h3>Chats</h3>
      </div>
      <input
        type="text"
        className={style.searchChat}
        placeholder="Buscar chats"
        onChange={(e) => handleChange(e.target.value)}
      />
      {data?.map((chat, i) => {
        return <ChatCard chat={chat} key={i} chatSelected={chatSelected} setChatSelected={setChatSelected} />;
      })}
    </section>
  );
};
