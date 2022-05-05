import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => {
  return css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;
};

const animateSpinKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinOn = ({ time = '1s', type = 'linear' } = {}) => {
  return css`
    animation: ${time} ${animateSpinKeyframes} ${type} infinite;
  `;
};
