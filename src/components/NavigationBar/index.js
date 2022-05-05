import React from 'react';
import { Link, Navigation } from './styles';
import { RiUserSmileLine, RiHomeLine, RiHeartLine } from 'react-icons/ri';

export const NavigationBar = () => {
  return (
    <>
      <Navigation>
        <Link to="/">
          <RiHomeLine size="24px" />
        </Link>
        <Link to="/favorites">
          <RiHeartLine size="24px" />
        </Link>
        <Link to="/users">
          <RiUserSmileLine size="24px" />
        </Link>
      </Navigation>
    </>
  );
};
