import React from 'react';
import { PhotoCard } from '@components/PhotoCard';
import { CardList } from '@components/PhotoCardList/styles';
import { gql, useQuery } from '@apollo/client';

const withQuery = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardList = () => {
  const { error, loading, data } = useQuery(withQuery);
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
