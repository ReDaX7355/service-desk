import React from 'react';
import { useParams } from 'react-router-dom';
import TicketData from '../components/Ticket/TicketData';

const TicketDataPage = () => {
  const { ticketNumber } = useParams<{ ticketNumber?: string }>();

  return (
    <>
      <TicketData number={ticketNumber} />
    </>
  );
};

export default TicketDataPage;
