import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { size } from '../Size';
import { color } from '../Colors';

export const Close = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width ?? size.moderateScale(20)}
    height={props.height ?? size.moderateScale(20)}
    color={props.color ?? color.cream}
    fill="none"
    {...props}>
    <Path
      d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
      stroke="currentColor"
      strokeWidth="3"
    />
  </Svg>
);
