import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Messages from '../components/Messages';
import { getTicketByNumber } from '../server/api';
import ITicket from '../types/ITicket';

const TicketDataPage = () => {
  const { ticketNumber } = useParams<{ ticketNumber?: string }>();
  const [ticketData, setTicketData] = useState<ITicket>({} as ITicket);

  useEffect(() => {
    if (ticketNumber) {
      getTicketByNumber(ticketNumber).then((data) => {
        if (data) {
          setTicketData(data[0]);
        }
      });
    }
  }, [ticketNumber]);

  // useEffect(() => {
  //   getTicketByNumber(ticketNumber).then((data) => {
  //     if (data) {
  //       setTicketData(data[0]);
  //     }
  //   });
  // }, [ticketNumber]);

  return (
    <div className="rounded bg-white p-7 md:h-[700px]">
      <div className="flex flex-col gap-20 md:flex-row md:gap-0">
        <div className="grow border-none md:border-b-2 md:border-gray-100">
          <h1 className="text-2xl font-bold">Данные заявки</h1>
          <div className="mt-10">
            <ul className="flex flex-col gap-4">
              <li className="text-primary">
                <p className="text-sm">Номер заявки: </p>
                <p className="font-medium">{ticketData.ticket_number}</p>
              </li>
              <li>
                <p className="text-sm text-gray-500">Тема: </p>
                <p className="font-medium">{ticketData.title}</p>
              </li>
              <li>
                <p className="text-sm text-gray-500">Создана: </p>
                <p className="font-medium">{ticketData.created_at}</p>
              </li>
              <li>
                <p className="text-sm text-gray-500">Заявитель: </p>
                <p className="font-medium">{ticketData.applicant_name}</p>
              </li>
              <li>
                <p className="text-sm text-gray-500">Тип заявки: </p>
                <p className="font-medium">
                  {ticketData.type_request === 'incident'
                    ? 'Инцидент'
                    : 'Вопрос'}
                </p>
              </li>
              <li>
                <p className="text-sm text-gray-500">Приоритет: </p>
                <p className="font-medium">
                  {ticketData.priority === '' ? 'Обычный' : 'Высокий'}
                </p>
              </li>
              <li>
                <p className="text-sm text-gray-500">Исполнитель: </p>
                <p className="font-medium">
                  {ticketData.assigned_to
                    ? ticketData.assigned_to
                    : 'Не назначен'}
                </p>
              </li>
              <li>
                <p className="text-sm text-gray-500">Статус заявки: </p>
                <p className="font-medium">
                  {ticketData.completed
                    ? 'Закрыта'
                    : ticketData.assigned_to
                    ? 'В работе'
                    : 'Открыта'}
                </p>
              </li>
              {ticketData.closed_at && (
                <li>
                  <p className="text-sm text-gray-500">Дата закрытия: </p>
                  <p className="font-medium">{ticketData.closed_at}</p>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="grow">
          <h1 className="text-2xl font-bold">Комментарии к заявке</h1>
          <Messages messages={ticketData.messages} />
        </div>
      </div>
    </div>
  );
};

export default TicketDataPage;
