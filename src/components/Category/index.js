import React from 'react';
import { Anchor, ImageWrapper, Image } from './styles';

export const Category = ({ cover, path, emoji }) => {
  return (
    <>
      <Anchor href={path}>
        <ImageWrapper>
          <Image src={cover} alt={emoji} />
        </ImageWrapper>
        {emoji}
      </Anchor>
    </>
  );
};
