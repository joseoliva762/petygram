import React from 'react';
import { Category } from '@components/Category';
import { List, Item } from '@components/CategoriesList/styles';
import { useCategories } from '@hooks/useCategories';

const CategoriesListComponent = () => {
  const { categories } = useCategories();

  return (
    <>
      {!!categories?.length && (
        <List>
          {categories &&
            categories.map((category, index) => (
              <Item key={`categories-category-${index}-${(category.id || index) + 1}-${category?.name}`}>
                <Category {...category} path={`/categories/${category.id}`} />
              </Item>
            ))}
        </List>
      )}
    </>
  );
};

export const CategoriesList = React.memo(CategoriesListComponent);
