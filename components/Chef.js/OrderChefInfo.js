import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import PageBackSVG from "../../assets/Svgs/PageBackSVG";
import ChefDish from "./ChefDish";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import StatusChangeBtn from "./StatusChangeBtn";
import { TouchableHighlight,ScrollView} from "react-native-gesture-handler";
import { CommonActions } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import { AppLoading } from "expo";
import * as Font from "expo-font";

export default function OrderChefInfo({ route }) {
  const order = route.params.order;
  const numDish = order.dishSelected.length;
  const [noOfSelected, setNoOfSelected] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [pageTitle, setPageTitle] = useState(route.params.pageTitle);
  const [buttonText, setButtonText] = useState("Confirm");
  let bs = React.createRef();
  let fall = new Animated.Value();

  const getCheckedNo = (val) => {
    let temp = noOfSelected;
    if (val === true) {
      setNoOfSelected(temp + 1);
    } else if (val === false && temp !== 0) {
      setNoOfSelected(temp - 1);
    } else {
      setNoOfSelected(0);
    }
    if (val === true && temp + 1 === numDish) {
      setButtonText("Order Ready");
      bs.current.snapTo(0);
    } else {
      setButtonText("Confirm");
      bs.current.snapTo(1);
    }
  };
  const callConfirm = () => {
    var setTrue = buttonText;
    if (setTrue === "Confirm") {
      setIsConfirmed(true);
      bs.current.snapTo(1);
      setPageTitle("In Progress");
      // setButtonText("Order Ready")
    } else if (setTrue === "Order Ready") {
      setPageTitle("Order Ready");
      setButtonText("Order Complete");
      // we can call the function here to resolve the order to ready state
    } else if (setTrue === "Order Complete") {
      route.params.navigation.dispatch(
        CommonActions.reset({
          type: "Navigation/INIT",
          index: 1,
          routes: [
            {
              name: "ChefScreen",
              params: {
                pageTitle: "Chef Screen",
              },
            },
          ],
        })
      );
    }
    // set status of order to prep
  };
  const renderChefConfiramtions = (props) => {
    return (
      <View style={styles.BottomAdd}>
        <View style={{ flex: 1, paddingLeft: 20,marginRight:110 }}>
          <Text style={{ color: "#FF264D", fontFamily:"Poppins-SemiBold",fontSize: 12}}>
            Ordering for
          </Text>
          <Text style={{ color: "#282828", fontFamily:"Poppins-SemiBold", fontSize: 14 }}>
            {order.customer}
          </Text>
        </View>

        <StatusChangeBtn statusText={buttonText} action={callConfirm} />
      </View>
    );
  };
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
    <View style={{ alignItems: "center", backgroundColor: "#fff" }}>
      {/**/}
      <BottomSheet
        ref={bs}
        snapPoints={[width / 1.6, 0]}
        renderContent={() => renderChefConfiramtions(bs)}
        initialSnap={0}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <View style={styles.topDesign} />
      <View style={styles.pageHeader}>
        <PageBackSVG
          onPress={() => route.params.navigation.pop()}
          style={styles.pageBack}
        />
        <Text style={styles.pageTit}>{pageTitle}</Text>
      </View>
      <View>
        <View style={styles.topTit}>
          <Text style={styles.belowTit}>Order Details</Text>
          <Text style={styles.tableTitno}>Table {order.tableNo}</Text>
        </View>
        <ScrollView>
          {order.dishSelected.map((each, index) => {
            return (
              <ChefDish
                dish={each}
                key={each.id * index}
                getCheckedNo={getCheckedNo}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  topDesign: {
    position: "absolute",
    flex: 1,
    top: 0,
    width: width,
    height: height / 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#FF264D",
    alignItems: "center",
    
  },
  pageHeader: {
    flexDirection: "row",
    width: width,
    height: width / 6.5,
    justifyContent: "center",
    alignItems: "flex-end",
    elevation: 3,
  },
  pageBack: {
    position: "absolute",
    left: width / 15,
  },
  pageTit: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    fontFamily:"Poppins-SemiBold"
  },
  belowTit: {
    color: "#282828",
    fontSize: 18,
    fontFamily:"Poppins-SemiBold"
  },
  topTit: {
    width: width,
    paddingLeft: 20,
    paddingTop: width / 20,
    marginBottom: width / 15,
  },
  tableTitno: { color: "#282828", fontSize: 12, fontFamily:"Poppins-SemiBold" },
  BottomAdd: {
    backgroundColor: "#FFE4E9",
    width: width,
    height: width / 2,
    elevation: 8,
    // paddingTop: 40,
    paddingVertical: 40,
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "grey",
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderTopLeftRadius: width / 12,
    borderTopRightRadius: width / 12,
    // position: "absolute",
    // bottom: 0,
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
