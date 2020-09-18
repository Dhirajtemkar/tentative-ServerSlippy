import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Arrow from "../img/arrow";

const GenBill = ({ orderDetail, navigation, pageRoutedFrom }) => {
  const [selectedId, setSelectedId] = useState(null);
  let Order = orderDetail;

  const handleNewView = (item) => {
    if (pageRoutedFrom === "ChefNew") {
      navigation.push("OrderChefInfo", {
        order: Order,
        navigation: navigation,
        pageTitle: "Order Details",
      });
    } else {
      //name based on order state and server is routing
      navigation.push("SplitAmountScreen", {
        abc: item.abc,
        count1: 3,
        totalAmount: item.totalAmount,
        navigation: navigation,
        tableNo: item.tableNo,
      });
    }
    console.log(Order);
  };

  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const renderItem = ({ item }) => {
    const backgroundColor =
      item.orderState === "Generate" ? "#f7a500" : "#00b406";

    return item.orderState == "Generate" ? (
      <TouchableOpacity
        style={styles.tabbContainer}
        onPress={() => handleNewView(item)}
      >
        <View style={styles.numberContainer}>
          <Text style={styles.numText}>{item.tableNo}</Text>
        </View>
        <View style={styles.statusBox}>
          <View
            style={{
              height: windowHeight * 0.12,
              width: windowWidth * 0.016,
              backgroundColor: backgroundColor,
            }}
          />
          <View style={styles.stateContainer}>
            <Text style={styles.stateText}>{item.orderState}</Text>
          </View>
        </View>
        <View style={styles.texxt}>
          <Text style={styles.dishText}>
            {item.dishSelected[0].name},{item.dishSelected[1].name},...
          </Text>
          <Text style={styles.dishText}>
            {item.code}/ ${item.total}
          </Text>
        </View>
        <TouchableOpacity
          style={{ marginLeft: windowWidth * 0.8, justifyContent: "center" }}
        >
          <Arrow />
        </TouchableOpacity>
      </TouchableOpacity>
    ) : null;
  };

  return (
    <FlatList
      data={Order}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
  );
};

const styles = StyleSheet.create({
  tabbContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    height: windowHeight * 0.12,
    borderBottomWidth: 1,
    borderBottomColor: "#a9a9a9",
    flexDirection: "row",
  },

  statusBox: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    height: windowHeight * 0.12,
    width: windowWidth * 0.12,
    borderBottomWidth: 1,
    borderBottomColor: "#a9a9a9",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    elevation: 12,
  },
  stateContainer: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.2,
    justifyContent: "center",
    alignItems: "center",
    left: -windowWidth * 0.05,
  },
  stateText: {
    transform: [{ rotate: "270deg" }],
    fontFamily: "Poppins-Light",
    fontSize: 16,
  },
  numText: {
    marginRight: windowWidth / 25,
    fontSize: 18,
    fontFamily: "Poppins-Light",
  },

  numberContainer: {
    position: "absolute",
    top: windowHeight * 0.01,
    width: windowWidth * 0.23,
    backgroundColor: "#ffffff",
    height: windowHeight * 0.1,
    alignItems: "flex-end",
    justifyContent: "center",
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    elevation: 10,
  },
  texxt: {
    position: "absolute",
    left: windowWidth / 3.8,
    top: windowHeight / 40,
    backgroundColor: "#ffffff",
    borderRightColor: "#a9a9a9",
    justifyContent: "center",
  },
  dishText: {
    fontSize: 16,
    fontFamily: "Poppins-Light",
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

export default GenBill;
