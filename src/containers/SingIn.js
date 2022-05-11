import React from 'react';
import { SignInWrapper, SignInContent, SignInForm, Text, SignWrapper, ToggleState } from '@styles/SignStyles';
import { useUser } from '@hooks/useUser';
import { useLogin } from '@hooks/useLogin';
import { UserForm } from '@components/UserForm';
import PetygramIcon from '@components/PetygramIcon';

export const SingIn = () => {
  const { signIn, toggleNeedRegister } = useUser();
  const { login, loginError, loginLoading } = useLogin();

  const handleLogin = ({ email, password }) => {
    const input = { email, password };
    login({ variables: { input } }).then(({ data }) => {
      const { login } = data;
      signIn(login);
    });
  };

  const handleNavigate = () => {
    toggleNeedRegister();
  };

  return (
    <>
      <SignInWrapper>
        <SignInContent>
          <SignInForm>
            <PetygramIcon />
            <Text>Inicia sesión con tu cuenta en petygram y descubre el mundo con tu mascota</Text>
            <UserForm
              onSubmit={handleLogin}
              submitText="Iniciar sesión"
              isLoading={loginLoading}
              disabled={loginLoading}
              hasAnError={loginError}
              errorMessage="Comprueba que tus datos estan correctos y vuelve a intentarlo."
            />
          </SignInForm>
          <SignWrapper>
            <Text>¿No tienes cuenta?</Text>
            <ToggleState onClick={handleNavigate}>Regístrate</ToggleState>
          </SignWrapper>
        </SignInContent>
      </SignInWrapper>
    </>
  );
};
