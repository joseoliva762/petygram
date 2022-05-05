import * as React from 'react';
import { Svg } from './styles';

const PetygramIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" shapeRendering="geometricPrecision" textRendering="geometricPrecision" {...props}>
    <g strokeWidth={3}>
      <path d="M0 79C0 19.75 19.75 0 79 0s79 19.75 79 79-19.75 79-79 79S0 138.25 0 79" transform="matrix(.20377 .01783 -.01783 .2038 2.81 -.01)" fill="#a6caf8" stroke="#a6caf8" />
      <path
        d="M0 76.5C0 19.125 19.125 0 76.5 0S153 19.125 153 76.5 133.875 153 76.5 153 0 133.875 0 76.5"
        transform="matrix(.20377 .01783 -.01783 .2038 3.263 .604)"
        fill="#0070f3"
        stroke="rgba(0,112,243,0.333)"
      />
    </g>
    <path fill="#f3f3f3" d="m17.742 9.167 7.801 14.342-16.57-.57 8.769-13.772z" />
    <path fill="#f6f6f6" d="m17.75 9.886 7.326 13.302-15.549-.535L17.75 9.886z" />
  </Svg>
);

export default PetygramIcon;
