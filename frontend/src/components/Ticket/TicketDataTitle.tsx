import React, {FC} from 'react';

interface TicketDataTitleProps {
  text?: string
}

const TicketDataTitle: FC<TicketDataTitleProps> = ({text}) => {
  return (
    <h1 className="text-2xl font-bold">{text}</h1>
  );
};

export default TicketDataTitle;