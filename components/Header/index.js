import * as React from 'react';
import styled from 'styled-components/native';

import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

const Header = styled.View`
  width: 100%; 
`;

export default () => {
  return (
    <Header>
      <Svg width="100%" height="100" viewBox="0 0 411 97">
        <Path
          fill="url(#paint0_linear)"
          d="M-.5 51.5v-52h411v52s-46.5 45-205.5 45S-.5 51.5-.5 51.5z"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1="205"
            x2="205"
            y1="-0.5"
            y2="96.5"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#1799C1" />
            <Stop offset="1" stopColor="#1BB7E7" />
          </LinearGradient>
        </Defs>
      </Svg>
    </Header>
  );
};
