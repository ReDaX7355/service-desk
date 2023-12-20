import React, { FC, useEffect, useState } from 'react';
import { getTicketByNumber } from '../../server/api';
import ITicket from '../../types/ITicket';
import TicketMessages from './TicketMessages';
import TicketDataList from './TicketDataList';
import TicketDataTitle from './TicketDataTitle';
import TicketAction from './TicketAction';

interface TicketDataProps {
  number: string | undefined;
}

const TicketData: FC<TicketDataProps> = ({ number }) => {
  const [ticketData, setTicketData] = useState<ITicket | null>(null);  

  useEffect(() => {
    if (number) {
      getTicketByNumber(number).then((data) => {
        if (data) {
          setTicketData(data[0]);
        }
      });
    }
  }, [number]);

  return (
    <div className="rounded bg-white p-7 md:h-[700px]">
      {ticketData &&
      <div className="flex flex-col gap-20 md:flex-row md:gap-0">
        <div className="grow border-none md:border-b-2 md:border-gray-100">
          <TicketDataTitle text="Данные заявки" />
          <div className="scroll-default mt-10 h-[550px] overflow-y-auto">
            <TicketDataList data={ticketData} />
          </div>
        </div>
        <div className="grow">
          <div className="flex items-center justify-between">
            <TicketDataTitle text="Комментарии к заявке" />
            {!ticketData.completed &&
            <TicketAction assigned={ticketData.assigned_to}
            />
            }
          </div>
          <TicketMessages messages={ticketData.messages} />
        </div>
      </div>}
    </div>
  );
};

const MemoizedMyComponent = React.memo(TicketData);

MemoizedMyComponent.displayName = 'TicketData';

export default MemoizedMyComponent;