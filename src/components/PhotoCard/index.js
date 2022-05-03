import React from 'react';
import { useNearScreen } from '@hooks/useNearScreen';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { useToggleLike } from '@hooks/useToggleLike';
import { CardWrapper, Anchor, ImageWrapper, Image } from '@components/PhotoCard/styles';
import { FavButton } from '@components/FavButton';
const DEFAULT_IMAGE = 'https://source.unsplash.com/random';

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  const { show, elementRef } = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const { mutation } = useToggleLike();

  const handleLike = (value) => {
    value &&
      mutation({
        variables: {
          input: { id }
        }
      });
    setLiked(value);
  };

  return (
    <>
      <CardWrapper ref={elementRef}>
        {show && (
          <>
            <Anchor href={`/?detail=${id}`}>
              <ImageWrapper>
                <Image src={src} alt={`card-${id}`} />
              </ImageWrapper>
            </Anchor>
            <FavButton liked={liked} likes={likes} onClick={handleLike} />
          </>
        )}
      </CardWrapper>
    </>
  );
};
