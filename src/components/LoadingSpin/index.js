import React from 'react';
import { Spin } from '@components/LoadingSpin/styles';

export const LoadingSpin = ({ props, spinColor }) => {
  return (
    <>
      <Spin fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M15.165 8.53a.5.5 0 0 1-.404.58A7 7 0 1 0 23 16a.5.5 0 0 1 1 0 8 8 0 1 1-9.416-7.874.5.5 0 0 1 .58.404z" fill={spinColor || '#000'} stroke="4" />
      </Spin>
    </>
  );
};
