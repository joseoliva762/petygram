import React from 'react';
import { Helmet } from 'react-helmet';

export const Meta = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title} | Petygram</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
