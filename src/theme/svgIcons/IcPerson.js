import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import { color } from '../Colors';

export const Person = props => {
  return (
    <Svg
    width={props.width ?? 16}
    height={props.height ?? 16}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={3}
      stroke={props.stroke ?? color.cream}
      fill="none"
      {...props}
    >
      <Circle cx={32} cy={18.14} r={11.14} />
      <Path d="M54.55 56.85A22.55 22.55 0 0032 34.3h0A22.55 22.55 0 009.45 56.85z" />
    </Svg>
  );
};

