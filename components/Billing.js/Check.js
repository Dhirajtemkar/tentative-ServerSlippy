import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from "react-native";
import CheckedSVG from "../../assets/Svgs/CheckedSVG";
import UncheckedSVG from "../../assets/Svgs/UncheckedSVG";
const { width, height } = Dimensions.get("window");
import { AuthContext } from "../../StackScreens/context";


export default function Check(props) {
    const [check, setCheck] = useState(false);
    const { onCheckPress } = React.useContext(AuthContext)

  const getChecked = ({index}) => {
    const v = check;
    setCheck(!check);
    onCheckPress(index);
    
  };
  return (
    <TouchableOpacity onPress={() => getChecked(props)}>
        {check === true ? <CheckedSVG /> : <UncheckedSVG />}
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
