import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import PageBackSVG from "../../assets/Svgs/PageBackSVG";
import Dishes from "../MoreInfo/Dishes";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomActions from "./BottomActions";
import { AppLoading } from "expo";
import * as Font from "expo-font";
const { width, height } = Dimensions.get("window");

export default function ModifyOrder({ route }) {
  //   const [OrderDetails, setOrderDetails] = useState(
  //     route.params.finalOrder.dishSelected
  //   );
  //   const [WaiterOrderChecked, setWaiterOrderChecked] = useState([]);

  //   const [completeOrder, setCompleteOrder] = useState(route.params.finalOrder);
  //   const [totalUpdated, setTotalUpdated] = useState(
  //     route.params.finalOrder.total
  //   );

  //   const OrderDishUpdate = (
  //     val,
  //     dishId,
  //     dishName,
  //     c,
  //     dishCustomizable,
  //     dishRating,
  //     dishPrice,
  //     checkedHai
  //   ) => {
  //     let tempVal = totalUpdated;
  //     let OrderBuilt = OrderDetails;
  //     let comp = completeOrder;
  //     let tempDish = {
  //       // batch: id,
  //       id: dishId,
  //       name: dishName,
  //       count: c,
  //       total: val,
  //       // isCustomized: dishCustomizable,
  //       // customOptions: ,
  //       rating: dishRating,
  //       price: dishPrice,
  //       checkHai: false,
  //     };
  //     if (
  //       OrderBuilt.filter((e) => e.name == dishName && e.id == dishId).length > 0
  //     ) {
  //       OrderBuilt.map((each, index) => {
  //         if (each.id == dishId) {
  //           if (each.name == dishName) {
  //             OrderBuilt[index] = tempDish;
  //           }
  //         }
  //       });
  //     } else {
  //       OrderBuilt.push(tempDish);
  //     }
  //     setOrderDetails(OrderBuilt);
  //     // var upDate = {
  //     //   dishSelected: OrderBuilt,
  //     //   total: finalTotal.toFixed(2),
  //     //   date: comp.date,
  //     //   hotelName: comp.hotelName,
  //     //   time: comp.time,
  //     //   image: comp.hotelImage,
  //     //   locality: comp.hotelLocality,
  //     //   Status: "IN PROGRESS",
  //     //   orderBuild: true, // update if order cancle
  //     // };
  //   };
  //   const FinalCalculations = (checked, id, dishName) => {
  //     let waiterConfirmed = WaiterOrderChecked;
  //     let finalTotal = 0;
  //     if (checked === true) {
  //       for (let i = 0; i < OrderDetails.length; i++) {
  //         if (
  //           OrderDetails[i].name === dishName &&
  //           OrderDetails[i].id === id &&
  //           OrderDetails[i].checkHai !== true
  //         ) {
  //           OrderDetails[i].checkHai = checked;
  //           // finalTotal = finalTotal + OrderDetails[i].total;
  //           waiterConfirmed.push(OrderDetails[i]);
  //         }
  //       }
  //       setWaiterOrderChecked(waiterConfirmed);
  //       for (let j = 0; j < waiterConfirmed.length; j++) {
  //         finalTotal = finalTotal + waiterConfirmed[j].total;
  //       }
  //       setTotalUpdated(finalTotal);
  //     } else {
  //       for (let i = 0; i < OrderDetails.length; i++) {
  //         if (
  //           OrderDetails[i].name === dishName &&
  //           OrderDetails[i].id === id &&
  //           OrderDetails[i].checkHai === true
  //         ) {
  //           OrderDetails[i].checkHai = checked;
  //           // finalTotal = finalTotal + OrderDetails[i].total;
  //           waiterConfirmed = waiterConfirmed.filter(
  //             (a) => a.name !== dishName && a.dishId !== id && a.checkHai !== true
  //           );
  //         }
  //       }
  //       setWaiterOrderChecked(waiterConfirmed);
  //       for (let j = 0; j < waiterConfirmed.length; j++) {
  //         finalTotal = finalTotal + waiterConfirmed[j].total;
  //       }
  //       setTotalUpdated(finalTotal);
  //     }
  //   };

  const orderData = route.params.WaiterOrderChecked;
  let [fontsLoaded] = useFonts({
    "Poppins-Medium": require('../../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-Bold": require('../../assets/fonts/Poppins-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
    }else{
  return (
    <SafeAreaView style={styles.SelectDish}>
      <View style={styles.TopDesign}>
        <TouchableOpacity style={{ paddingLeft: 15 }}>
          <PageBackSVG
            onPress={() => route.params.navigation.pop()}
            style={styles.pageBack}
          />
        </TouchableOpacity>
        <Text style={styles.pageTit}>{route.params.pageTitle}</Text>
      </View>
      <View style={styles.mainOrderPage}>
        <View style={styles.topTit}>
          <Text style={styles.tit}>Order Details</Text>
          <Text style={styles.tit1}>Table: {route.params.tableNo}</Text>
        </View>
        <ScrollView
          style={{ height: width * 1, marginTop: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            data={orderData}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text>
                    {item.name} {item.count}
                  </Text>
                </View>
              );
            }}
            numColumns={1}
          />
        </ScrollView>
      </View>
      <View style={styles.BottomActions}>
        <Text>{route.params.totalUpdated}</Text>
      </View>
    </SafeAreaView>
  );
}
}
const styles = StyleSheet.create({
  SelectDish: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  TopDesign: {
    position: "absolute",
    flex: 1,
    top: 0,
    width: width,
    height: width / 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#FF264D",
    alignItems: "center",
    flexDirection: "row",
  },
  pageBack: {
    alignItems: "center",
    flex: 0,
  },
  pageTit: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    fontFamily:"Poppins-Medium",
    marginTop:10
  },
  mainOrderPage: {
    marginTop: width / 5,
    alignItems: "center",
  },
  topTit: {
    alignItems: "flex-start",
    width: width,
    paddingLeft: 20,
  },
  tit: {
    fontSize: 20,
    fontFamily:"Poppins-Bold"
  },
  tit1: {
    fontSize: 18,
    marginTop: 10,
    fontFamily:"Poppins-Bold"
  },
  BottomActions: {
    width: width,
    position: "absolute",
    bottom: 0,
    height: width / 1.5,
    backgroundColor: "#FFE4E9",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    elevation: 10,
    shadowColor: "grey",
    shadowRadius: 10,
    shadowOpacity: 0.5,
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
