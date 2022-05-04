import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #000;
  font-size: 12px;
  height: 36px;
  margin: 0;
  outline: none;
  padding: 0 8px;
  width: 100%;

  @media (min-width: 613px) {
    background: #fafafa;
  }
`;

export const Button = styled.button`
  background: #0095f6;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  height: 36px;
  margin: 10px 0 0;
  outline: none;
  padding: 0 16px;
  width: 100%;
`;
