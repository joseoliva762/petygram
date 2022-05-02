import React from 'react';
import { useNearScreen } from '@hooks/useNearScreen';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { CardWrapper, Anchor, ImageWrapper, Image } from '@components/PhotoCard/styles';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FavButton } from '@components/FavButton';
const DEFAULT_IMAGE = 'https://source.unsplash.com/random';

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  const { show, elementRef } = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  const handleLike = (value) => {
    setLiked(value);
  };

  const fill = liked ? '#f00' : '#000';
  const LikeIcon = liked ? AiFillHeart : AiOutlineHeart;

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
            <FavButton liked={liked} likes={likes} onClick={handleLike} LikeIcon={LikeIcon} fill={fill} />
          </>
        )}
      </CardWrapper>
    </>
  );
};
