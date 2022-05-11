import React from 'react';
import { Link, Image } from './styles';

export const Fav = ({ id, src }) => {
  return (
    <Link to={`/details/${id}`}>
      <Image src={src} alt={id} />
    </Link>
  );
};
