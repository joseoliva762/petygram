import React from 'react';
import { useNearScreen } from '@hooks/useNearScreen';
import { useToggleLike } from '@hooks/useToggleLike';
import { CardWrapper, Link, ImageWrapper, Image } from '@components/PhotoCard/styles';
import { FavButton } from '@components/FavButton';

const DEFAULT_IMAGE = 'https://source.unsplash.com/random';

export const PhotoCard = ({ id, liked, src = DEFAULT_IMAGE, likes = 0 }) => {
  const { show, elementRef } = useNearScreen();
  const { mutation } = useToggleLike();

  const handleLike = () => {
    mutation({
      variables: {
        input: { id }
      }
    });
  };

  return (
    <>
      <CardWrapper ref={elementRef}>
        {show && (
          <>
            <Link to={`/details/${id}`}>
              <ImageWrapper>
                <Image src={src} alt={`card-${id}`} />
              </ImageWrapper>
            </Link>
            <FavButton liked={liked} likes={likes} onClick={handleLike} />
          </>
        )}
      </CardWrapper>
    </>
  );
};
