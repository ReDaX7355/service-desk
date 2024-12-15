import React, {FC} from 'react';
import ITicket from '../../types/ITicket';
import TicketDataListItem from './TicketDataListItem';

interface TicketDataListProps{
  data: ITicket
}

const TicketDataList:FC<TicketDataListProps> = ({data}) => {
  return (
    <ul className="flex flex-col gap-4">
      <TicketDataListItem 
        title={'Номер заявки'}
        value={data.ticket_number}
        styles={'text-primary'}
      />
      <TicketDataListItem 
        title={'Тема'}
        value={data.title}
      />
      <TicketDataListItem 
        title={'Создана'}
        value={data.created_at}
      />
      <TicketDataListItem 
        title={'Заявитель'}
        value={data.applicant_name}
      />
      <TicketDataListItem 
        title={'Тип заявки'}
        value={data.type_request === 'incident' ? 'Инцидент' : 'Вопрос'}
      />
      <TicketDataListItem 
        title={'Приоритет'}
        value={data.priority === '' ? 'Обычный' : 'Высокий'}
      />
      <TicketDataListItem 
        title={'Исполнитель'}
        value={data.assigned_to ? data.assigned_to : 'Не назначен'}
      />
      <TicketDataListItem
        title={'Статус заявки'}
        value={data.completed ? 'Закрыта'
          : data.assigned_to
            ? 'В работе'
            : 'Открыта'}
      />
      {data.closed_at && (
        <TicketDataListItem 
          title={'Дата закрытия'}
          value={data.closed_at}
        />
      )}
    </ul>
  );
};

export default TicketDataList;