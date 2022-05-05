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
  const [user, setUser] = useState(() => {
    const isAuth = !!sessionStorage.getItem('token');
    return {
      isAuth,
      needRegister: false
    };
  });

  const signIn = (token) => {
    sessionStorage.setItem('token', token);
    setUser({
      ...user,
      isAuth: true
    });
  };

  const signOut = () => {
    sessionStorage.removeItem('token');
    setUser({
      ...user,
      isAuth: false
    });
  };

  const toggleNeedRegister = () => {
    setUser({
      ...user,
      needRegister: !user.needRegister
    });
  };

  return {
    user,
    signIn,
    signOut,
    toggleNeedRegister
  };
};
