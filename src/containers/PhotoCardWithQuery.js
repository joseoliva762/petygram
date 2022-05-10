import React from 'react';
import { PhotoCard } from '@components/PhotoCard';
import { useGetSinglePhoto } from '@hooks/useGetSinglePhoto';
import { Back } from '@components/Back';
import styled from 'styled-components';

const BackWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 4px;
  justify-content: flex-start;
  padding: 0px 8px;
  width: 100%;
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { data, error, loading } = useGetSinglePhoto(id);
  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>No hay contenido disponible</p>;
  return (
    <>
      <BackWrapper>
        <Back path="/" />
      </BackWrapper>
      <PhotoCard {...(data?.photo || {})} />
    </>
  );
};
