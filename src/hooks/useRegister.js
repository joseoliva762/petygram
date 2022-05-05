import { gql, useMutation } from '@apollo/client';

const withRegister = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;
export const useRegister = () => {
  const [register, { loading: registerLoading, error: registerError }] = useMutation(withRegister);
  return {
    register,
    registerLoading,
    registerError
  };
};
