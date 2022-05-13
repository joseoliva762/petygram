import React from 'react';
import { Meta } from '@components/Meta';

export default function NotFound() {
  return (
    <>
      <Meta title="Not found" description="Página no encontrada" />
      <div>
        <h1>Lo siento 🥲</h1>
        <p>No encontramos lo que buscabas.</p>
      </div>
    </>
  );
}
