import { useState, useEffect } from 'react';
import axios from 'axios';
import endPoints from '@services/api';
import { to } from '@tools/to';

export const useCategories = (initCategories = []) => {
  const [categories, setCategories] = useState(initCategories);

  useEffect(() => {
    const getCategories = async () => {
      const [err, response] = await to(axios.get(endPoints.categories.get));
      if (err) return console.log(err);
      const { data } = response;
      setCategories(data);
    };
    getCategories();
  }, []);

  return {
    categories
  };
};
