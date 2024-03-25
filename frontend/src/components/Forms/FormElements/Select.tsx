import React, { FC } from 'react';

interface SelectProps {
  name?: string;
  id?: string;
  options: [{ [value: string]: string }];
  onChangeFunction?: (e: string) => void;
}

const Select: FC<SelectProps> = ({
  name = '',
  id = '',
  options = [],
  onChangeFunction = () => null,
}) => {
  return (
    <select
      name={name}
      id={id}
      onChange={(e) => onChangeFunction(e.target.value)}
    >
      {Object.keys(options).map((key: string, i: number) => (
        <option key={key} value={key}>
          {options[i].key}
        </option>
      ))}
    </select>
  );
};

export default Select;
