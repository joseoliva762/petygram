import React from 'react';
import { Link, ImageWrapper, Image } from './styles';

export const Category = ({ cover, path, emoji }) => {
  return (
    <>
      <Link to={path}>
        <ImageWrapper>
          <Image src={cover} alt={emoji} />
        </ImageWrapper>
        {emoji}
      </Link>
    </>
  );
};
