import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  type?: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  onFocusInput?: () => void;
  error: FieldError | undefined;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  register,
  onFocusInput,
  error,
}) => {
  return (
    <>
      <input
        className="mt-5 rounded border-2 border-secondary px-3 py-1 outline-primary transition-all focus:outline-2"
        {...register}
        type={type}
        onFocus={() => onFocusInput?.()}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error?.type === 'required' && (
        <p role="alert" className="mt-1 text-sm text-danger">
          {error?.message}
        </p>
      )}
    </>
  );
};

export default Input;
