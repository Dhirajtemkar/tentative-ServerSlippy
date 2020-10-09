import React, {useState, } from 'react';
import { View, StyleSheet, Text, Dimensions } from "react-native";
import RightArrowSVG from "../../assets/Svgs/RightArrowSVG";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
import { AppLoading } from "expo";
import * as Font from "expo-font";

export default function ActionBtn(props) {
  let [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold":require("../../assets/fonts/Poppins-Bold.ttf")

    
    
  });

  if (!fontsLoaded) {
    return <AppLoading />;
    }else{
  return (
    <View style={{ marginVertical: 5, marginHorizontal: 10 ,}}>
      <TouchableOpacity
        style={{
          backgroundColor: props.color,
          width: 110,
          height: 35,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 10,
          elevation: 5,
          shadowColor: "grey",
          shadowRadius: 8,
          shadowOpacity: 0.5,
          paddingHorizontal:15
        }}
        onPress={() => props.action()}
      >
        <Text style={styles.tit}>{props.title}</Text>
        <RightArrowSVG style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  tit: {
    color: "#fff",
    fontSize: 16,
    fontFamily:"Poppins-Bold"
  },
  arrow: {
    position: "absolute",
    right: 10,
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

