import React, {FC, useContext} from 'react';
import { MainContext } from '../../context/MainProvider';
import { setTicketComplete } from '../../server/api';

interface TicketActionProps {
  id: string,
  assigned: string;
}

const TicketAction:FC<TicketActionProps> = ({id, assigned}) => {
  const {state} = useContext(MainContext);

  const handleAction = async () => {
    if (assigned){
      await setTicketComplete(id);
    }
    
  };

  if (assigned && state?.user?.full_name !== assigned) return <p className="text-primary">Только для чтения</p>;

  return (
    <button onClick={handleAction} className="rounded bg-primary px-4 py-2 text-white hover:bg-agree">{assigned ? 'Закрыть заявку' : 'Взять в работу'}</button>
  );
};

const MemoizedMyComponent = React.memo(TicketAction);
MemoizedMyComponent.displayName = 'TicketAction';

export default MemoizedMyComponent;