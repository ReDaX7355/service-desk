import React, { FC, useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MainContext } from './../../context/MainProvider';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../service/AuthService';

interface SignInForm {
  login: string;
  email: string;
  password: string;
}

interface FormSignInProps {
  hundleChangeForm: () => void;
}

const FormSignIn: FC<FormSignInProps> = ({ hundleChangeForm }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInForm>();

  const { signIn } = useContext(MainContext);

  const navigate = useNavigate();

  const [invalidForm, setInvalidForm] = useState<string | undefined>('');

  const onFocusInput = () => {
    setInvalidForm('');
  };

  const onSubmit: SubmitHandler<SignInForm> = (data) => {
    AuthService.loginUser(data.login, data.password).then(({ auth, error }) => {
      if (!error && auth) {
        signIn?.(data.login);
        navigate('/tickets');
      } else {
        setInvalidForm(error);
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-5 flex flex-col gap-7"
    >
      <fieldset className="flex flex-col">
        <input
          className="rounded border-2 border-secondary px-3 py-1 outline-primary transition-all focus:outline-2 "
          {...register('login', {
            required: {
              value: true,
              message: 'Заполните поле "Логин"',
            },
          })}
          onFocus={() => onFocusInput()}
          placeholder="Логин"
          aria-invalid={errors.login ? 'true' : 'false'}
        />
        {errors.login?.type === 'required' && (
          <p role="alert" className="mt-1 text-sm text-danger">
            {errors.login.message}
          </p>
        )}

        <input
          className="mt-4 rounded border-2 border-secondary px-3 py-1 outline-primary focus:outline-2"
          type="password"
          {...register('password', {
            required: {
              value: true,
              message: 'Заполните поле "Пароль"',
            },
          })}
          onFocus={() => onFocusInput()}
          placeholder="Пароль"
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password?.type === 'required' && (
          <p role="alert" className="mt-1 text-sm text-danger">
            {errors.password.message}
          </p>
        )}
      </fieldset>
      <p className="text-danger">{invalidForm}</p>
      <fieldset className="flex items-center justify-between">
        <input
          type="submit"
          value="Войти"
          className="rounded bg-primary px-5 py-1.5 text-white transition hover:bg-agree"
        />
        <p
          className=" cursor-pointer select-none text-primary hover:text-agree hover:underline"
          onClick={() => hundleChangeForm()}
        >
          Регистрация
        </p>
      </fieldset>
    </form>
  );
};

export default FormSignIn;
