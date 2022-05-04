import React from 'react';
import { Link, Navigation } from './styles';
import { RiUserSmileLine, RiHomeLine, RiHeartLine } from 'react-icons/ri';

export const NavigationBar = () => {
  return (
    <>
      <Navigation>
        <Link to="/">
          <RiHomeLine fill="#000" size="24px" />
        </Link>
        <Link to="/favorites">
          <RiHeartLine fill="#000" size="24px" />
        </Link>
        <Link to="/users">
          <RiUserSmileLine fill="#000" size="24px" />
        </Link>
      </Navigation>
    </>
  );
};
