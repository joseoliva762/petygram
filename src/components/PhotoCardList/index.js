import React from 'react';
import { PhotoCard } from '@components/PhotoCard';
import { CardList } from '@components/PhotoCardList/styles';
import { useGetPhotos } from '@hooks/useGetPhotos';

export const PhotoCardList = ({ categoryId }) => {
  const { error, loading, data } = useGetPhotos(categoryId);

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>No hay contenido disponible</p>;
  const photos = data?.photos || [];
  return (
    <>
      <CardList className="photo-card-list">
        {photos.map((photo) => (
          <PhotoCard key={`photocard-item-${photo.id}`} {...photo} />
        ))}
      </CardList>
      {!photos.length && <p>No hay contenido disponible</p>}
    </>
  );
};
