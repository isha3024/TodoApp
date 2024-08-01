import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { size } from '../Size';
import { color } from '../Colors';

export const UserAdd = props => (
  <Svg
    width={props.width ?? size.moderateScale(20)}
    height={props.height ?? size.moderateScale(20)}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4 20v-1a5 5 0 015-5h3.75m4.785-.036V17.5m0 0v3.535m0-3.535h3.536m-3.536 0H14M15 7a4 4 0 11-8 0 4 4 0 018 0z"
      stroke={props.stroke ?? color.cream}
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);