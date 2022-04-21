import React, { useEffect, useState } from 'react';
import { Category } from '@components/Category';
import { List, Item } from '@components/CategoriesList/styles';
import { to } from '@tools/to';
import endPoints from '@services/api';
import axios from 'axios';

export const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const [err, response] = await to(axios.get(endPoints.categories.get));
      if (err) return console.log(err);
      const { data } = response;
      setCategories(data);
    };
    getCategories();
  }, []);

  return (
    <>
      {!!categories?.length && (
        <List>
          {categories &&
            categories.map((category, index) => (
              <Item key={`categories-category-${index}-${(category.id || index) + 1}-${category?.name}`}>
                <Category {...category} />
              </Item>
            ))}
        </List>
      )}
    </>
  );
};
