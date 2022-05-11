import { Fav } from '@components/Fav';
import { Grid } from '@components/Fav/styles';
import { LoadingSpin } from '@components/LoadingSpin';
import { useFavs } from '@hooks/useFavs';
import React from 'react';

export const Favs = () => {
  const { favs, favsLoading, favsError } = useFavs();

  if (favsLoading) return <LoadingSpin />;
  if (favsError || !favs?.length) return <p>No hay contenido disponible</p>;
  console.log({ favs });
  return (
    <Grid>
      <>
        {favs.map((fav) => (
          <Fav {...fav} key={fav.id} />
        ))}
      </>
    </Grid>
  );
};
