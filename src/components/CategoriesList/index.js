import React from 'react';
import { Category } from '@components/Category';
import { List, Item } from '@components/CategoriesList/style';
import db from '../../../api/db.json';

export const CategoriesList = () => {
  const { categories } = db;

  return (
    <>
      <List>
        {categories &&
          categories.map((category) => (
            <>
              <Item>
                <Category key={`categories-category-${category.id}`} {...category} />
              </Item>
            </>
          ))}
      </List>
    </>
  );
};
