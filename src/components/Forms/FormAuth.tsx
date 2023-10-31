import React, { FC, useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MainContext } from '../../context/MainProvider';
import AuthService from '../../service/AuthService';
import { SignUpForm } from './../../types/FormInterfaces';
import { useNavigate } from 'react-router-dom';
import Input from './FormElements/Input';

const FormAuth: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpForm>();

  const [signUp, setSignUp] = useState(false);
  const [invalidForm, setInvalidForm] = useState<string | undefined>('');

  const { signIn } = useContext(MainContext);
  const navigate = useNavigate();

  const onFocusInput = () => {
    setInvalidForm('');
  };

  const hundleChangeForm = (): void => {
    setSignUp((prev) => !prev);
  };

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    let response;
    if (signUp) {
      response = await AuthService.registration(data);
    } else {
      response = await AuthService.loginUser(data.login, data.password);
    }

    if (response.error) {
      setInvalidForm(response.error);
    } else {
      signIn?.(response.data);
      localStorage.setItem('user_login', data.login);
      navigate('/tickets');
    }
  };

  return (
    <>
      <h3 className="text-center text-xl font-bold">
        {signUp ? 'Регистрация' : 'Вход'}
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-5 flex flex-col gap-4"
      >
        <fieldset className="flex flex-col">
          {signUp && (
            <Input
              register={register('full_name', {
                required: {
                  value: true,
                  message: 'Заполните поле "ФИО"',
                },
              })}
              placeholder="ФИО"
              type="text"
              onFocusInput={onFocusInput}
              error={errors.full_name}
            />
          )}
          <Input
            register={register('login', {
              required: {
                value: true,
                message: 'Заполните поле "Логин"',
              },
            })}
            placeholder="Логин"
            type="text"
            onFocusInput={onFocusInput}
            error={errors.login}
          />
          {signUp && (
            <Input
              register={register('email', {
                required: {
                  value: true,
                  message: 'Заполните поле "Email"',
                },
                pattern: {
                  value:
                    // eslint-disable-next-line no-useless-escape
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                  message: 'Непрвильно введен Email',
                },
              })}
              placeholder="Email"
              type="email"
              onFocusInput={onFocusInput}
              error={errors.email}
            />
          )}
          <Input
            register={register('password', {
              required: {
                value: true,
                message: 'Заполните поле "Пароль"',
              },
            })}
            placeholder="Пароль"
            type="password"
            onFocusInput={onFocusInput}
            error={errors.password}
          />
        </fieldset>
        <p className="h-[20px] text-danger ">{invalidForm}</p>
        <fieldset className="flex items-center justify-between">
          <input
            type="submit"
            value={signUp ? 'Регистрация' : 'Вход'}
            className="rounded bg-primary px-5 py-1.5 text-white transition hover:bg-agree"
          />
          <p
            className=" cursor-pointer select-none text-primary hover:text-agree hover:underline"
            onClick={() => hundleChangeForm()}
          >
            {signUp ? 'Вход' : 'Регистрация'}
          </p>
        </fieldset>
      </form>
    </>
  );
};

export default FormAuth;
