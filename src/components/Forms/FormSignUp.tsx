import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface SignUpForm {
  login: string;
  email: string;
  password: string;
}

interface FormSignUpProps {
  hundleChangeForm: () => void;
}

const FormSignUp: FC<FormSignUpProps> = ({ hundleChangeForm }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpForm>();

  const onSubmit: SubmitHandler<SignUpForm> = () => null;

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
          placeholder="Логин"
          aria-invalid={errors.login ? 'true' : 'false'}
        />
        {errors.login?.type === 'required' && (
          <p role="alert" className="mt-1 text-sm text-danger">
            {errors.login.message}
          </p>
        )}

        <input
          className="mt-4 rounded border-2 border-secondary px-3 py-1 outline-primary transition-all focus:outline-2"
          {...register('email', {
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
          type="email"
          placeholder="Email"
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.login?.type === 'required' && (
          <p role="alert" className="mt-1 text-sm text-danger">
            {errors.email?.message}
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
          placeholder="Пароль"
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password?.type === 'required' && (
          <p role="alert" className="mt-1 text-sm text-danger">
            {errors.password.message}
          </p>
        )}
      </fieldset>
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
          Вход
        </p>
      </fieldset>
    </form>
  );
};

export default FormSignUp;
