import React from 'react';
import { Button } from '@components/PhotoCard/styles';

export const FavButton = ({ liked, likes = 0, onClick, LikeIcon, fill }) => {
  return (
    <>
      <Button onClick={() => onClick(!liked)}>
        <div>
          <LikeIcon size="24px" fill={fill} />
        </div>
        <p>{likes} Me gusta</p>
      </Button>
      ;
    </>
  );
};
