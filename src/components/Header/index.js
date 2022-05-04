import React from 'react';
import { Anchor, HeaderWrapper } from './styles';
import { Logo } from '@components/Logo';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Anchor to="/">
        <Logo />
      </Anchor>
    </HeaderWrapper>
  );
};
