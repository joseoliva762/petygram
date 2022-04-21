import React from 'react';
import { PhotoCard } from '@components/PhotoCard';
import { CardList } from '@components/PhotoCardList/styles';

export const PhotoCardList = ({ photos }) => {
  return (
    <>
      <CardList className="photo-card-list">
        {[1, 2, 3, 4, 5].map((photo) => (
          <PhotoCard key={`photocard-item-${photo}`} />
        ))}
      </CardList>
      {!photos?.length && <p>No hay contenido disponible</p>}
    </>
  );
};
