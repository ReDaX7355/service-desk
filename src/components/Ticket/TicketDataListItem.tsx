import React, {FC} from 'react';

interface TicketDataListItemProps{
  title: string | string[];
  value: string | number;
  styles?: string;
}

const TicketDataListItem:FC<TicketDataListItemProps> = ({title, value, styles}) => {

  return (
    <li className={styles && styles}>
      <p className={styles ? styles + 'text-sm' : 'text-gray-500'}>{title}: </p>
      <p className="font-medium">{value}</p>
    </li>
  );
};

export default TicketDataListItem;