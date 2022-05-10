import { gql, useMutation } from '@apollo/client';

const withFavs = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useFavs = () => {
  // const [login, { loading: loginLoading, error: loginError }] = useMutation(withLogin);
  // return {
  //   login,
  //   loginLoading,
  //   loginError
  // };
};
