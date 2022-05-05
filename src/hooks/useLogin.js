import { gql, useMutation } from '@apollo/client';

const withLogin = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;
export const useLogin = () => {
  const [login, { loading: loginLoading, error: loginError }] = useMutation(withLogin);
  return {
    login,
    loginLoading,
    loginError
  };
};
