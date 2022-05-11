import { gql, useQuery } from '@apollo/client';

const withFavs = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const useFavs = () => {
  const options = { fetchPolicy: 'cache-and-network' };
  const { data, loading: favsLoading, error: favsError } = useQuery(withFavs, options);
  const favs = data?.favs;
  return {
    favs,
    favsLoading,
    favsError
  };
};
