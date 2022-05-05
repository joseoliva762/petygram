import React from 'react';
import { SignInWrapper, SignInContent, SignInForm, Text, SignUpWrapper, ToggleState, SubText } from '@styles/SignStyles';
import { useUser } from '@hooks/useUser';
import { useRegister } from '@hooks/useRegister';
import { UserForm } from '@components/UserForm';
import PetygramIcon from '@components/PetygramIcon';

export const SingUp = () => {
  const { signIn, toggleNeedRegister } = useUser();
  const { register, registerError, registerLoading } = useRegister();

  const handleSignUp = ({ email, password }) => {
    const input = { email, password };
    register({ variables: { input } }).then(signIn);
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
            <Text>Regístrate para ver fotos y videos con tu mascota</Text>
            <UserForm
              onSubmit={handleSignUp}
              submitText="Registrate"
              isLoading={registerLoading}
              disabled={registerLoading}
              hasAnError={registerError}
              errorMessage="El usuario ya existe o hubo algún problema con el servicio. Verifica la conexión y tus datos e inténtalo nuevamente."
            />
            <SubText>Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies</SubText>
          </SignInForm>
          <SignUpWrapper>
            <Text>¿Tienes cuenta?</Text>
            <ToggleState onClick={handleNavigate}>Inicia sesión</ToggleState>
          </SignUpWrapper>
        </SignInContent>
      </SignInWrapper>
    </>
  );
};
