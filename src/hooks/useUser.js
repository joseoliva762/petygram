import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const user = useUserProvider();
  return (
    <>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </>
  );
};

export const useUser = () => useContext(UserContext);

const useUserProvider = () => {
  const [user, setUser] = useState({
    isAuth: false
  });

  const signIn = () => {
    setUser({
      ...user,
      isAuth: true
    });
  };

  return {
    user,
    signIn
  };
};
