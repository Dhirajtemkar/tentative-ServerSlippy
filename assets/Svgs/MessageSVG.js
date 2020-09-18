import React from "react";
import Svg, { Path } from "react-native-svg";

export default function MessageSVG(props) {
  return (
    <Svg width={28} height={24} viewBox="0 0 28 24" fill="none" {...props}>
      <Path
        d="M20.793 11.964c.841 0 1.535-.6 1.535-1.309 0-.727-.694-1.326-1.535-1.326-.842 0-1.536.6-1.536 1.326 0 .71.694 1.309 1.536 1.309zM13.935 11.964c.841 0 1.514-.6 1.514-1.309 0-.727-.673-1.326-1.514-1.326-.842 0-1.536.6-1.536 1.326 0 .71.694 1.309 1.536 1.309zM7.54 11.964c.84 0 1.535-.6 1.535-1.309 0-.727-.694-1.326-1.536-1.326-.841 0-1.536.6-1.536 1.326 0 .71.695 1.309 1.536 1.309z"
        fill="#FF264D"
      />
      <Path
        d="M1.122 21.868a.802.802 0 00-.21 1.036c.189.31.547.51.946.51h.148c4.186-.528 6.332-2 7.405-3.127 1.515.436 3.114.673 4.755.673 7.363 0 13.359-4.635 13.359-10.305 0-5.689-5.996-10.323-13.36-10.323C6.803.332.807 4.966.807 10.655c0 2.254.968 4.453 2.735 6.234.547 2.362-2.398 4.943-2.419 4.98zM14.166 2.15c6.206 0 11.255 3.817 11.255 8.506 0 4.67-5.05 8.487-11.255 8.487-1.662 0-3.261-.272-4.755-.8-.463-.163-1.03-.018-1.304.364-.442.654-1.452 1.654-3.661 2.326.884-1.29 1.62-3.053 1.073-4.816a.993.993 0 00-.231-.363c-1.557-1.49-2.378-3.29-2.378-5.198 0-4.689 5.05-8.506 11.256-8.506z"
        fill="#FF264D"
      />
    </Svg>
  );
}
