import React from 'react';
import { useNearScreen } from '@hooks/useNearScreen';
import { useToggleLike } from '@hooks/useToggleLike';
import { CardWrapper, Link, ImageWrapper, Image } from '@components/PhotoCard/styles';
import { FavButton } from '@components/FavButton';
import { navigate } from '@reach/router';
import { useUser } from '@hooks/useUser';

const DEFAULT_IMAGE = 'https://source.unsplash.com/random';

export const PhotoCard = ({ id, liked, src = DEFAULT_IMAGE, likes = 0, username }) => {
  const { show, elementRef } = useNearScreen();
  const { mutation, mutationError } = useToggleLike();
  const { signOut } = useUser();

  const handleAuthError = () => {
    setTimeout(() => {
      navigate(`/login`);
      signOut();
    });
  };

  if (mutationError) return handleAuthError();

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
            <h3>{username}</h3>
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
