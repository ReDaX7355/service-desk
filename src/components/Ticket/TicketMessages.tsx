import React, { FC, useEffect } from 'react';
import IMessage from '../../types/IMessage';

interface TicketMessagesProps {
  messages: IMessage[];
}

const TicketMessages: FC<TicketMessagesProps> = ({ messages }) => {
  useEffect(() => {
    if (messages){
      const messagesBlock = document.getElementById(
        'messages_block'
      ) as HTMLElement;
      // const messagesBlock = document.getElementById('messages_block');
      messagesBlock.scrollTop = messagesBlock.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      className="scroll-default mt-10 max-h-[400px] overflow-hidden overflow-y-auto"
      id="messages_block"
    >
      
      {messages && 
          messages.length > 0 ?
        (<ul className="flex flex-col gap-7 p-5">
          {messages.map((message) => (
            <li
              key={message.message_id}
              className="rounded bg-secondary/[.3] px-4 py-7"
            >
              <div className="flex items-center gap-3">
                <p className="font-medium">{message.author}</p>
                <p className="text-sm text-gray-500">{message.timestamp}</p>
              </div>
              <p>{message.massage}</p>
            </li>
          ))} 
        </ul>) : <p>Комментариев нет</p>}
      
      
    </div>
  );
};

export default TicketMessages;
