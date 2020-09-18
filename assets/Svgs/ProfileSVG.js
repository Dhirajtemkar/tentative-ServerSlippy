import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function ProfileSVG(props) {
  return (
    <Svg width={18} height={20} viewBox="0 0 12 13" fill="none" {...props}>
      <Path
        d="M7.696 6.97c.834-.614 1.382-1.58 1.382-2.698A3.332 3.332 0 005.744.938a3.332 3.332 0 00-3.333 3.334c0 1.119.548 2.084 1.381 2.698a5.528 5.528 0 00-3.596 5.176c0 .263.219.504.504.504.285 0 .504-.219.504-.504 0-2.5 2.04-4.562 4.562-4.562 2.523 0 4.54 2.062 4.54 4.562 0 .263.22.504.505.504.285 0 .504-.219.504-.504-.022-2.369-1.535-4.387-3.619-5.176zM3.398 4.272a2.35 2.35 0 012.346-2.347 2.35 2.35 0 012.347 2.347A2.35 2.35 0 015.744 6.62a2.35 2.35 0 01-2.346-2.347z"
        fill="#F8607B"
      />
    </Svg>
  );
}
