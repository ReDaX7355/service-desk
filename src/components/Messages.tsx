import React, { FC, useEffect } from 'react';
import IMessage from '../types/IMessage';

interface MessagesProps {
  messages: IMessage[];
}

const Messages: FC<MessagesProps> = ({ messages }) => {
  useEffect(() => {
    const messagesBlock = document.getElementById(
      'messages_block'
    ) as HTMLElement;
    // const messagesBlock = document.getElementById('messages_block');
    messagesBlock.scrollTop = messagesBlock.scrollHeight;
  }, [messages]);

  return (
    <div
      className="mt-10 overflow-y-auto overflow-hidden max-h-[400px]"
      id="messages_block"
    >
      <ul className="flex flex-col gap-7 p-5">
        {messages?.length > 0
          ? messages.map((message) => (
              <li
                key={message.message_id}
                className="px-4 py-7 bg-secondary rounded"
              >
                <div className="flex gap-3 items-center">
                  <p className="font-medium">{message.author}</p>
                  <p className="text-gray-500 text-sm">{message.timestamp}</p>
                </div>
                <p>{message.massage}</p>
              </li>
            ))
          : 'Комментариев нет'}
      </ul>
    </div>
  );
};

export default Messages;
