import React from 'react';

export const lazyLoad = (path) => {
  return React.lazy(() => import(path || ''));
};
