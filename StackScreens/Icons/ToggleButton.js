import React from 'react';
import Svg,{Path,Circle,G,Defs} from 'react-native-svg'

const ToggleButton=(props)=>{

    return(
        <Svg width={80} height={29} viewBox="0 0 93 42" fill="none">
      <G filter="url(#prefix__filter0_d)">
        <Path
          d="M4 16.879C4 7.557 11.557 0 20.879 0h50.849c9.322 0 16.879 7.557 16.879 16.879 0 9.322-7.557 16.879-16.879 16.879h-50.85C11.558 33.758 4 26.2 4 16.878z"
          fill={props.switchColor1}
        />
      </G>
      <Circle cx={parseFloat(props.circlePosition1)} cy={17.217} r={14.217} fill={props.switchCircle1} />
      <Defs>
      </Defs>
    </Svg>
    )
}

export default ToggleButton;
