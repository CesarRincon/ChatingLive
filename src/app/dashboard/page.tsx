import React from 'react'
import style from './dashboard.module.css'
import { Chat } from '../../components/Chat/Chat';
import { ChatsList } from '../../components/Chats/ChatsList';


export default async function Dashboard() {
  return (
    <div className={style.containerDashboard}>
      <div className={style.chatList}>
        <ChatsList />
      </div>
      <div className={style.chat}>
        <Chat />
      </div>
    </div>
  );
} 
