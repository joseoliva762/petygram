import React from 'react';
import { useInputValue } from '@hooks/useInputValue';
import { Form, Input, Button } from '@components/UserForm/styles';

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input type="email" name="mail" placeholder="Usuario o correo electrónico" {...email} />
        <Input type="password" name="password" placeholder="Contraseña" {...password} />
        <Button type="submit">Iniciar sesión</Button>
      </Form>
    </>
  );
};
