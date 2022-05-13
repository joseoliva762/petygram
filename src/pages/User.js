import React from 'react';
import styled from 'styled-components';
import { useUser } from '@hooks/useUser';
import { PageWrapper } from '@styles/SignStyles';
import { AiOutlineLogout } from 'react-icons/ai';
import { Meta } from '@components/Meta';

const UserTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0px;
  padding: 0px;
`;

const SingOutButton = styled.button`
  align-items: center;
  background: #fff;
  border: 1px solid transparent;
  color: #f00;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  gap: 8px;
  justify-content: center;
  padding: 8px 16px;
  min-height: 64px;
  width: 100%;
  outline: none;

  @media (min-width: 613px) {
    border: 1px solid #ccc;
    border-radius: 0px;
  }
`;

const User = () => {
  const { signOut } = useUser();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <Meta title="Usuario" description="Tu perfil de usuario" />
      <PageWrapper>
        <UserTitle>Usuario</UserTitle>
        <SingOutButton onClick={handleSignOut}>
          <AiOutlineLogout size={24} />
          Cerrar sesión
        </SingOutButton>
      </PageWrapper>
    </>
  );
};

export default User;
