import React from 'react';
import { useInputValue } from '@hooks/useInputValue';
import { Form, Input, Button } from '@components/UserForm/styles';

export const UserForm = ({ onSubmit, submitText }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="email" name="mail" placeholder="Usuario o correo electrónico" {...email} />
        <Input type="password" name="password" placeholder="Contraseña" {...password} />
        <Button type="submit">{submitText || 'Iniciar sesión'}</Button>
      </Form>
    </>
  );
};
