import React from 'react';
import { PhotoCardWithQuery } from '@containers/PhotoCardWithQuery';
import styled from 'styled-components';
import { Meta } from '@components/Meta';

const DetailsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  width: 100%;
`;

const Details = ({ detailId }) => {
  return (
    <>
      <Meta title="Detalle de tu mascota" description="Detalle de un animal muy bonito" />
      <DetailsWrapper>
        <PhotoCardWithQuery id={detailId} />
      </DetailsWrapper>
    </>
  );
};

export default Details;
