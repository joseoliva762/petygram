import React from 'react';
import { useUser } from '@hooks/useUser';
import { SingIn } from '@containers/SingIn';
import { SingUp } from '@containers/SignUp';

export const NotRegistred = () => {
  const { user } = useUser();

  return user.needRegister ? <SingUp /> : <SingIn />;
};
