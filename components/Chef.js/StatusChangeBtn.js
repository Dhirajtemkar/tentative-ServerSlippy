import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import RightArrowSVG from "../../assets/Svgs/RightArrowSVG";
import { TouchableHighlight } from "react-native-gesture-handler";
import { AppLoading } from "expo";
import * as Font from "expo-font";
const { width, height } = Dimensions.get("window");


export default function StatusChangeBtn(props) {
  let [fontsLoaded] = useFonts({
    "Poppins-Light": require('../../assets/fonts/Poppins-Light.ttf'),
    "Poppins-Medium": require('../../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-Bold": require('../../assets/fonts/Poppins-Bold.ttf'),
    "Poppins-SemiBold": require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
    }else{
  return (
    <View style={{ flex: 1.5 }}>
      <TouchableHighlight onPress={() => props.action()}>
        <View style={styles.BaseBtn}>
          <Text style={styles.CustBtn}>{props.statusText}</Text>
          <RightArrowSVG style={{ marginHorizontal: 5 }} />
        </View>
      </TouchableHighlight>
    </View>
  );
}
}
const styles = StyleSheet.create({
  BaseBtn: {
    // width: width / 3,
    // height: width / 7,
    // paddingHorizontal: 0,
    paddingVertical: 10,
    backgroundColor: "#FF264D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    flexDirection: "row",
    marginRight: 20,
    // elevation: 2,
    // marginVertical: 10,
  },
  CustBtn: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    fontFamily:"Poppins-Bold"
  },
});
function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}