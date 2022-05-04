import React from 'react';
import { HeaderWrapper } from './styles';
import { Logo } from '@components/Logo';

export const Header = () => {
  return (
    <HeaderWrapper>
      <a href="/">
        <Logo />
      </a>
    </HeaderWrapper>
  );
};
