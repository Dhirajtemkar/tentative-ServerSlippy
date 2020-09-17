import React from 'react';
import Svg,{Path} from 'react-native-svg'

const Menu=(props)=>{
    return(
        <Svg width={27} height={36} viewBox="0 0 27 36" fill="none" {...props}>
      <Path
        d="M11.341 10.925c-1.946.834-3.243 2.611-3.319 4.679l-.153 4.316c-.038.761.61 1.378 1.412 1.378h.572l-1.03 6.346c-.152.98.649 1.85 1.679 1.85.915 0 1.678-.725 1.678-1.596V11.397c-.038-.363-.457-.617-.839-.472zM18.704 10.889c-.344 0-.61.254-.61.58v4.316c0 .145-.153.29-.306.29h-.381c-.153 0-.305-.145-.305-.29v-4.352c0-.327-.268-.58-.61-.58-.344 0-.611.253-.611.58v4.316c0 .145-.153.29-.306.29h-.381c-.153 0-.305-.145-.305-.29v-4.316c0-.327-.267-.58-.61-.58-.344 0-.61.253-.61.58v5.04c0 .726.61 1.343 1.41 1.343h.306l-.572 9.973c-.077.943.724 1.705 1.678 1.705h.038c.992 0 1.755-.798 1.679-1.705l-.649-9.973h.305c.763 0 1.412-.58 1.412-1.342v-5.041c.038-.29-.229-.544-.572-.544z"
        fill="#fff"
      />
      <Path
        d="M23.472 5.159h-.496V3.563c0-.87-.42-1.668-1.144-2.212a2.977 2.977 0 00-2.518-.508l-16.29 3.99C1.728 5.158.813 6.246.813 7.552v24.879c0 1.559 1.335 2.792 2.937 2.792h19.762c1.602 0 2.937-1.27 2.937-2.792V7.952c-.038-1.524-1.373-2.793-2.976-2.793zM19.81 2.838c.343-.073.572.036.687.145.19.145.305.362.305.58v1.596H10.349l9.461-2.321zm4.463 29.594c0 .398-.343.761-.8.761H3.71c-.42 0-.8-.326-.8-.761V7.552c0-.145.037-.254.075-.362h20.448c.42 0 .801.326.801.761v24.48h.038z"
        fill="#fff"
      />
      </Svg>
    )
}

export default Menu;