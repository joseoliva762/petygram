import React from 'react';
import { SignInWrapper, SingInContent, SignInForm, Text, SignUpWrapper, Link } from '@styles/SignStyles';
import { useUser } from '@hooks/useUser';
import { UserForm } from '@components/UserForm';
import PetygramIcon from '@components/PetygramIcon';

export const SingIn = () => {
  const { signIn } = useUser();

  const handleSignIn = (event) => {
    event.preventDefault();
    signIn();
  };

  return (
    <>
      <SignInWrapper>
        <SingInContent>
          <SignInForm>
            <PetygramIcon />
            <Text>Inicia sesión con tu cuenta en petygram y descubre el mundo con tu mascota</Text>
            <UserForm onSubmit={handleSignIn} />
          </SignInForm>
          <SignUpWrapper>
            <Text>¿No tienes cuenta?</Text>
            <Link to="/auth/signup">Regístrate</Link>
          </SignUpWrapper>
        </SingInContent>
      </SignInWrapper>
    </>
  );
};
