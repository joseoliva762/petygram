import React from 'react';
import { PhotoCardWithQuery } from '@containers/PhotoCardWithQuery';
import styled from 'styled-components';

const DetailsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  width: 100%;
`;

export const Details = ({ detailId }) => {
  return (
    <>
      <DetailsWrapper>
        <PhotoCardWithQuery id={detailId} />
      </DetailsWrapper>
    </>
  );
};
