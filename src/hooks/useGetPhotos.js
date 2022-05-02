import { gql, useQuery } from '@apollo/client';

const withPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const useGetPhotos = (categoryId) => {
  const options = {
    variables: {
      categoryId
    }
  };
  const { error, loading, data } = useQuery(withPhotos, options);

  return {
    error,
    loading,
    data
  };
};
