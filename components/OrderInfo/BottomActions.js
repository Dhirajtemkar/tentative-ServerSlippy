import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, FlatList } from "react-native";
import ServerManSVG from "../../assets/Svgs/ServerManSVG";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ActionBtn from "./ActionBtn";
const { width, height } = Dimensions.get("window");
import { CommonActions } from "@react-navigation/native";

export default function BottomActions({
  navigation,
  WaiterOrderChecked,
  totalUpdated,
  tableNo,
  completeOrder,
  orderState,
  actionCarried,
  prevOrder,
  prevTotal,
  orderReadyOrder,
}) {
  

  const ConfirmOrder = () => {
    if (actionCarried === "extended") {
      navigation.dispatch(
        CommonActions.reset({
          type: "Navigation/INIT",
          index: 1,
          routes: [
            {
              name: "ServerScreen",
              params: {
                tableNo: tableNo,
                OrderGot: WaiterOrderChecked,
                total: totalUpdated,
                completeOrder: completeOrder,
                prevOrder: prevOrder,
                completeTotal: prevTotal + totalUpdated,
              },
            },
          ],
        })
      );
    } else if (orderState === "ready" || orderState === "prep") {
      // edit this function
      navigation.push("TableCart", {
        pageTitle: "Table Cart",
        orderReady: orderReadyOrder,
        totalUpdated: totalUpdated,
        tableNo: tableNo,
        navigation: navigation,
      });
    } else {
      navigation.dispatch(
        CommonActions.reset({
          type: "Navigation/INIT",
          index: 1,
          routes: [
            {
              name: "ServerScreen",
              params: {
                tableNo: tableNo,
                OrderGot: WaiterOrderChecked,
                total: totalUpdated,
                completeOrder: completeOrder,
              },
            },
          ],
        })
      );
    }
  };
  const cancelOrder = () => {
    // navigation.pop();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          // { name: "ServerScreen" },
          {
            name: "ServerScreen",
          },
        ],
      })
    );
  };
  const extendOrder = () => {
    navigation.push("SelectDish", {
      pageTitle: "Extend Order",
      completeOrder: completeOrder,
      totalUpdated: totalUpdated,
      tableNo: tableNo,
      navigation: navigation,
    });
  };
  // const [actionBtns, setActionBtns] = useState([]);
  let actionBtns = [];
  for (let i = 0; i < 1; i++) {
    let confirm = { title: "Confirm", color: "#12BB90", action: ConfirmOrder };
    let cancel = { title: "Cancle", color: "#FF264D", action: cancelOrder };
    let extend = { title: "Extend", color: "#FF6400", action: extendOrder }; //   edit the action to extends new action
    let Bill = { title: "Bill", color: "#12BB90", action: ConfirmOrder };
    if (orderState === "new") {
      // from menu screen(new)=>{modify,confirm,cancle},
      actionBtns = [ confirm, cancel];
    } else if (orderState === "prep") {
      // from homeServer(prep)=>{modify,confirm,cancle,Extend},
      actionBtns = [ Bill, cancel, extend];
    } else if (orderState === "ready") {
      // from homeServer(Ready)=>{modify,confirm,cancle,Extend}
      actionBtns = [Bill, cancel, extend];
    }
  }
  let [fontsLoaded] = useFonts({
    "Poppins-Medium": require('../../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-Bold": require('../../assets/fonts/Poppins-Bold.ttf'),

  });

  if (!fontsLoaded) {
    return <AppLoading />;
    }else{

  return (
    <View style={styles.mainCont}>
      <View style={styles.left}>
        <View style={styles.Tit}>
          <Text style={styles.tit1}>ORDERING FOR</Text>
          <Text style={styles.tit2}>Dhiraj Temkar</Text>
        </View>
        <ServerManSVG style={styles.serveMan} width={130} height={130} />

      </View>
      <View style={styles.right}>
        <FlatList
          data={actionBtns}
          renderItem={({ item }) => {
            return (
              <View>
                {/*<Text>{item.total}</Text>*/}
                <ActionBtn
                  title={item.title}
                  color={item.color}
                  action={item.action}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  mainCont: {
    flexDirection: "row",
    width: width,
  },
  left: {
    flex: 0.5,
    width: width,
    height: 40,
  },
  Tit: {
    marginVertical: 0,
    paddingHorizontal: 30,
  },
  tit1: {
    fontSize: 10,
    color: "#FF264D",
    fontFamily:"Poppins-Bold"

  },
  tit2: {
    fontSize: 14,
    color: "#4E4A4A",
    fontFamily:"Poppins-Bold"
  },
  right: {
    flex: 0.5,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
  },
  serveMan: {
     alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop:10,
    left: width/20,
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
