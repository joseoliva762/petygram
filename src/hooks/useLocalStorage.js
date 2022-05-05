import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStorageValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [storageValue, setLocalStorage];
};
