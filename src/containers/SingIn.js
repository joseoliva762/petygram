import React from 'react';
import { SignInWrapper, SignInContent, SignInForm, Text, SignUpWrapper, ToggleState } from '@styles/SignStyles';
import { useUser } from '@hooks/useUser';
import { UserForm } from '@components/UserForm';
import PetygramIcon from '@components/PetygramIcon';

export const SingIn = () => {
  const { signIn, toggleNeedRegister } = useUser();

  const handleSignIn = (event) => {
    event.preventDefault();
    signIn();
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
            <UserForm onSubmit={handleSignIn} />
          </SignInForm>
          <SignUpWrapper>
            <Text>¿No tienes cuenta?</Text>
            <ToggleState onClick={handleNavigate}>Regístrate</ToggleState>
          </SignUpWrapper>
        </SignInContent>
      </SignInWrapper>
    </>
  );
};

// Comprueba que tus datos estan correctos y vuelve a intentarlo.
