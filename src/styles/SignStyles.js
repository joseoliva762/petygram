import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const SignInWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const SingInContent = styled.div`
  background: #fff;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  padding: 12px;
  width: 100%;

  @media (min-width: 613px) {
    background: transparent;
  }
`;

export const SignInForm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  min-height: 264px;
  max-width: 350px;
  width: 100%;

  @media (min-width: 613px) {
    background: #fff;
    border: 1px solid #ccc;
    padding: 24px 40px;
  }
`;

export const Text = styled.p`
  color: #000;
  font-size: 14px;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const SignUpWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  gap: 4px;
  justify-content: center;
  max-width: 350px;
  width: 100%;

  @media (min-width: 613px) {
    background: #fff;
    border: 1px solid #ccc;
    padding: 12px 40px;
  }
`;

export const Link = styled(LinkRouter)`
  color: #0095f6;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
`;
