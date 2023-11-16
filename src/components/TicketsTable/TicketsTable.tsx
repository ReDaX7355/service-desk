import React, { FC } from 'react';
import ITicket from '../../types/ITicket';
import HeaderCell from './TableComponents/HeaderCell';
import TableRow from './TableComponents/TableRow';

interface TicketsTableProps {
  tickets: ITicket[] | undefined;
  isError?: boolean;
  isLoading?: boolean;
}

const TicketsTable: FC<TicketsTableProps> = ({
  tickets,
  isError,
  isLoading,
}) => {
  if (isError) return <p>Error</p>;

  return (
    <div className="px-7 ">
      {isLoading ? (
        // <TableLoader />
        <div>Loading</div>
      ) : (
        <div className="table-wrapper container m-auto my-4 h-[700px] overflow-auto rounded bg-white shadow-lg">
          <table className="table-tickets">
            <thead>
              <tr>
                <HeaderCell dataName="ticket_number">Номер заявки</HeaderCell>
                <HeaderCell dataName="title">Тема</HeaderCell>
                <HeaderCell dataName="created_at">Дата создания</HeaderCell>
                <HeaderCell dataName="type_request">Тип заявки</HeaderCell>
                <HeaderCell dataName="priority">Приоритет</HeaderCell>
                <HeaderCell dataName="completed">Статус</HeaderCell>
              </tr>
            </thead>
            <tbody>
              {tickets &&
                tickets.map((ticket) => (
                  <TableRow key={ticket.ticket_number} ticket={ticket} />
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TicketsTable;
