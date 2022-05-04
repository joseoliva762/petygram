import React from 'react';
import { useUser } from '@hooks/useUser';

export const NotRegistred = () => {
  const { signIn } = useUser();

  const handleSignIn = (event) => {
    event.preventDefault();
    signIn();
  };

  return (
    <>
      <form onSubmit={handleSignIn}>
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};
