import { gql, useQuery } from '@apollo/client';

const withPhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const useGetSinglePhoto = (id) => {
  const options = { variables: { id } };
  const { error, loading, data } = useQuery(withPhoto, options);

  return {
    error,
    loading,
    data
  };
};
