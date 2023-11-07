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

  const [formSignUp, setFormSignUp] = useState(false);
  const [invalidFormMessage, setInvalidFormMessage] = useState<
    string | undefined
  >('');

  const { signIn } = useContext(MainContext);
  const navigate = useNavigate();

  const onFocusInput = () => {
    setInvalidFormMessage('');
  };

  const hundleChangeForm = (): void => {
    setFormSignUp((prev) => !prev);
  };

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    let response;

    if (formSignUp) {
      response = await AuthService.registration(data);
    } else {
      response = await AuthService.loginUser(data);
    }

    if (response.error) {
      setInvalidFormMessage(response.error);
    } else {
      signIn?.(response.data);
      localStorage.setItem('user_login', data.login);
      navigate('/tickets');
    }
  };

  return (
    <>
      <h3 className="text-center text-xl font-bold">
        {formSignUp ? 'Регистрация' : 'Вход'}
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-2 flex flex-col gap-1 sm:my-5 sm:gap-4"
      >
        <fieldset className="flex flex-col">
          {formSignUp && (
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
          {formSignUp && (
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
        <p className="h-[20px] text-danger ">{invalidFormMessage}</p>
        <fieldset className="flex items-center justify-between">
          <input
            type="submit"
            value={formSignUp ? 'Регистрация' : 'Вход'}
            className="button px-5"
          />
          <p
            className=" cursor-pointer select-none text-primary hover:text-agree hover:underline"
            onClick={() => hundleChangeForm()}
          >
            {formSignUp ? 'Вход' : 'Регистрация'}
          </p>
        </fieldset>
      </form>
    </>
  );
};

export default FormAuth;
