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
        value={''}
        changerFunction ={(value) => value === 'incident' ? 'Инцидент' : 'Вопрос'}
      />
      <TicketDataListItem 
        title={'Приоритет'}
        value={data.priority}
        changerFunction ={(value) => value === '' ? 'Обычный' : 'Высокий'}
      />
      <TicketDataListItem 
        title={'Исполнитель'}
        value={data.assigned_to}
        changerFunction ={(value) => value ? value : 'Не назначен'}
      />
      <TicketDataListItem
        title={'Статус заявки'}
        value={''}
        changerFunction ={(value) => value
          ? 'Закрыта'
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