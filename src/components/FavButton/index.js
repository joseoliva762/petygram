import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Button } from '@components/PhotoCard/styles';

export const FavButton = ({ liked, likes = 0, onClick, size }) => {
  const fill = liked ? '#f00' : '#000';
  const LikeIcon = liked ? AiFillHeart : AiOutlineHeart;

  return (
    <>
      <Button onClick={() => onClick(!liked)}>
        <div>
          <LikeIcon size={`${size || 24}px`} fill={fill} />
        </div>
        <p>{likes} Me gusta</p>
      </Button>
    </>
  );
};
