import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { size } from '../Size';
import { color } from '../Colors';

export const Check = props => (
  <Svg
    width={props.width ?? size.moderateScale(30)}
    height={props.height ?? size.moderateScale(30)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.03 8.78L9 16.81l-3.53-3.53 1.06-1.06L9 14.69l6.97-6.97 1.06 1.06z"
      fill={props.fill ?? color.cream}
    />
  </Svg>
);
