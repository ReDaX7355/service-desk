import React, {FC, useContext} from 'react';
import { MainContext } from '../../context/MainProvider';

interface TicketActionProps {
  assigned: string;
  action: () => void;
}

const TicketAction:FC<TicketActionProps> = ({assigned, action}) => {
  const {state} = useContext(MainContext);

  if (assigned && state?.user?.full_name !== assigned) return <p className="text-primary">Только для чтения</p>;

  return (
    <button onClick={action} className="rounded bg-primary px-4 py-2 text-white hover:bg-agree">{assigned ? 'Закрыть заявку' : 'Взять в работу'}</button>
  );
};

const MemoizedMyComponent = React.memo(TicketAction);
MemoizedMyComponent.displayName = 'TicketAction';

export default MemoizedMyComponent;