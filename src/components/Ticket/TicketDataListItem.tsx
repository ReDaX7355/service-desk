import React, {FC, useEffect, useState} from 'react';

interface TicketDataListItemProps{
  title: string | string[];
  value: string | number;
  changerFunction?: (value: string) => string;
  styles?: string;
}

const TicketDataListItem:FC<TicketDataListItemProps> = ({title, value, changerFunction, styles}) => {
  const [itemValue, setItemValue] = useState<string>('');

  useEffect(() => {
    if (changerFunction){
      setItemValue(changerFunction(itemValue));
    }
  }, []);

  return (
    <li className={styles && styles}>
      <p className={styles ? styles + 'text-sm' : 'text-gray-500'}>{title}: </p>
      <p className="font-medium">{itemValue ? itemValue : value}</p>
    </li>
  );
};

export default TicketDataListItem;