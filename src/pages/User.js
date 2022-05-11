import React from 'react';
import styled from 'styled-components';
import { useUser } from '@hooks/useUser';
import { SignWrapper, PageWrapper } from '@styles/SignStyles';

const UserTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0px;
  padding: 0px;
`;

const SingOutButton = styled.button`
  background: #fff;
  border: 1px solid transparent;
  color: #f00;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 16px;
  min-height: 64px;
  width: 100%;
  outline: none;

  @media (min-width: 613px) {
    border: 1px solid #ccc;
    border-radius: 0px;
  }
`;

export const User = () => {
  const { signOut } = useUser();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <PageWrapper>
        <UserTitle>Usuario</UserTitle>
        <SingOutButton onClick={handleSignOut}>Cerrar sesión</SingOutButton>
      </PageWrapper>
    </>
  );
};
