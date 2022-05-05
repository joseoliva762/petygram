import React from 'react';
import { useInputValue } from '@hooks/useInputValue';
import { Form, Input, Button, ErrorBox } from '@components/UserForm/styles';
import { LoadingSpin } from '@components/LoadingSpin';

export const UserForm = ({ onSubmit, submitText, isLoading, hasAnError, errorMessage, disabled }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} type="email" name="mail" placeholder="Usuario o correo electrónico" {...email} />
        <Input disabled={disabled} type="password" name="password" placeholder="Contraseña" {...password} />
        <Button disabled={disabled} type="submit">
          {isLoading ? <LoadingSpin spinColor="#fff" /> : <p>{submitText || 'Iniciar sesión'}</p>}
        </Button>
      </Form>
      {hasAnError && (
        <>
          <ErrorBox>
            <p>{errorMessage || 'Hubo algún problema con el servicio'}</p>
          </ErrorBox>
        </>
      )}
    </>
  );
};
