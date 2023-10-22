import React from 'react';

interface InputProps {
  type?: string;
  placeholder: string;
  onChangeFunction?: (e: string) => void;
  props?: InputProps[];
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  onChangeFunction = () => null,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChangeFunction(e.target.value)}
      className="rounded border-2 border-primary px-3 py-1 transition placeholder:text-secondary focus:border-primary focus:outline-none"
      {...props}
    />
  );
};

export default Input;
