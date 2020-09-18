import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function HomeSVG(props) {
  return (
    <Svg width={20} height={18} viewBox="0 0 12 11" fill="none" {...props}>
      <Path
        d="M7.085 10.781h2.378c.266 0 .49-.224.49-.49V5.884h.868c.21 0 .377-.126.462-.308a.496.496 0 00-.126-.546L6.09.357a.51.51 0 00-.671 0L.354 5.03a.496.496 0 00-.126.546c.07.196.252.308.462.308h.868v4.407c0 .266.224.49.49.49h2.378c.266 0 .49-.224.49-.49V7.297h1.679v2.994c0 .266.224.49.49.49zm-2.24-4.044a.496.496 0 00-.489.49v2.994H2.117V5.814a.496.496 0 00-.49-.49H.859L5.755.804l4.898 4.52h-.77a.496.496 0 00-.49.49v4.407H7.155V7.227a.496.496 0 00-.49-.49h-1.82z"
        fill="#FF264D"
      />
    </Svg>
  );
}
