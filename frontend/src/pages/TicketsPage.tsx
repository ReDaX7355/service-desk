import React, { FC } from "react";
import TicketsTable from "../components/TicketsTable/TicketsTable";
import { useQuery } from "react-query";
import ITicket from "./../types/ITicket";
import { getOpenTickets } from "./../server/api";

const TicketsPage: FC = () => {
  const { data, isError, isLoading } = useQuery<ITicket[]>(
    "tickets",
    getOpenTickets,
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <div>
      <TicketsTable tickets={data} isError={isError} isLoading={isLoading} />
    </div>
  );
};

export default TicketsPage;
