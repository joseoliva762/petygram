import React from 'react';
import { Link, HeaderWrapper } from './styles';
import { Logo } from '@components/Logo';
import { NavigationBar } from '@components/NavigationBar';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <NavigationBar />
    </HeaderWrapper>
  );
};
