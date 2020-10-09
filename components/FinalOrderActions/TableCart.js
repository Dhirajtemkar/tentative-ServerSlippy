import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import { TouchableOpacity,ScrollView } from "react-native-gesture-handler";
import RightArrowSVG from "../../assets/Svgs/RightArrowSVG";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import PromoToggle from "./PromoToggle";
import SearchBar from "../MoreInfo/search/SearchBar";
import Dishes from "../MoreInfo/Dishes";
import { AppLoading } from "expo";
import * as Font from "expo-font";
const { width, height } = Dimensions.get("window");

export default function TableCart({ route }) {
  const Order = route.params.orderReady;
  const navigation = route.params.navigation;
  let [promos, setPromos] = useState({
    name: "Dhiraj",
    // profileImg: require("../../assets/profileImg.jpg"),
    status: true,
    promos: [
      {
        id: 0,
        name: "FREEZYM",
        des: "Get 20% Off on Deserts",
        setPromo: false,
      },
      {
        id: 1,
        name: "TASTY300",
        des: "Get 300 Off on Orders above 1000",
        setPromo: false,
      },
      { id: 2, name: "BOGO", des: "Buy One Get One Free", setPromo: false },
      {
        id: 3,
        name: "SLIPPYDAY",
        des: "30% Off on Select Restaurants",
        setPromo: false,
      },
      {
        id: 4,
        name: "DINERKING",
        des: "Get 20% Off on Dining In",
        setPromo: false,
      },
    ],
  });
  let [searchDone, setSearchDone] = useState("");
  let [filteredPromo, setFilteredPromo] = useState(promos.promos);
  const getSearchDone = (value) => {
    setSearchDone(value);
    setFilteredPromo(
      promos.promos.filter((i) =>
        i.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const updatePromo = (promo) => {
    const newPromo = promos.promos;
    const prev = promo.setPromo;
    newPromo.map((a) => {
      if (a.id === promo.id) {
        a.setPromo = !prev;
      }
    });
    setPromos({ ...promos, promos: newPromo });
  };
  
  const renderPromoChange = () => {
    return (
      <View style={styles.BottomAdd}>
        <View style={styles.searchBarSpace}>
          <SearchBar
            getSearchDone={getSearchDone}
            placeHolder="APPLY PROMO CODE..."
          />
        </View>
        <View style={{ marginTop: width / 10 }}>
          <Text style={styles.toggleTit}>PromoCode</Text>
          <View>
            {filteredPromo.map((promo) => {
              return (
                <TouchableOpacity onPress={() => updatePromo(promo)}>
                  <PromoToggle key={promo.id} promo={promo} />
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            onPress={() => {
              bs.current.snapTo(1);
              setCallPromo(false);
            }}
          >
            <Text style={styles.applyPromo}>APPLY</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderSplitBillBtn = () => {
    return (
      <View style={styles.secondSheet}>
        <TouchableOpacity
          style={styles.secondSheetBtn}
          onPress={() => {
            bs.current.snapTo(1);
            setcallBillSplit(false);
          }}
        >
          <Text style={styles.secondBtnText}>SINGLE BILL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondSheetBtn}
          onPress={() => handleSplitNav()}
        >
          <Text style={styles.secondBtnText}>SPLIT BILL</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const [htSheet, setHtSheet] = useState(0);
  let bs = React.createRef();
  let fall = new Animated.Value();
  const [callPromo, setCallPromo] = useState(false);
  const [callBillSplit, setcallBillSplit] = useState(false);
  const manageBottomsheet = () => {
    if (callPromo === true) {
      setHtSheet(height-height/12-height/10+20);
      return renderPromoChange();
    } else if (callBillSplit === true) {
      setHtSheet(width / 2);
      return renderSplitBillBtn();
    }
  };

  const handleSplitNav = () => {
    bs.current.snapTo(1);
    setcallBillSplit(false);
    navigation.push("AddCustomer", {
      navigation: navigation,
      order: Order,
      pageTitle: "Add Customers", //testing
      totalUpdated: route.params.totalUpdated,
      tableNo: route.params.tableNo,
    });
  };
  let [fontsLoaded] = useFonts({
    "Poppins-Light": require('../../assets/fonts/Poppins-Light.ttf'),
    "Poppins-Medium": require('../../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-Regular": require('../../assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Bold": require('../../assets/fonts/Poppins-Bold.ttf'),
    "Poppins-SemiBold": require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
    }else{
  return (
    <SafeAreaView style={styles.mainTableCart}>
      <BottomSheet
        ref={bs}
        snapPoints={[htSheet, -20]}
        renderContent={() => manageBottomsheet()}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        userPromo={promos.promos}
      />
      <View style={styles.TopDesign}>
        <Text style={styles.pageTit}>{route.params.pageTitle}</Text>
      </View>
      <View style={styles.mainBelowTop}>
        <View style={styles.pageTitBelow}>
          <Text style={styles.titBelow}>Table Cart</Text>
          <Text style={styles.hotNameBelow}>{Order.hotelName}</Text>
          <Text style={styles.tableNo}>Table {Order.tableNo}</Text>
        </View>
        <View style={{height:height-(height/10)-(height/5)-(height/7.5)-(height/12)-(height/8)-50,marginTop:5}}>
        
          {/* todo: add the dishes to be displayed on this page*/}
          <FlatList
            data={Order.dishSelected}
            renderItem={({ item }) => {
              return (
                <View>
                  <Dishes
                    key={item.id * (item.index * 7 + 1) * item.index}
                    dish={item}
                    up={Order.orderBuild}
                    // OrderDishUpdate={OrderDishUpdate}
                    // FinalCalculations={FinalCalculations}
                    orderState={Order.orderState}
                  />
                </View>
              );
            }}
            numColumns={1}
          />
        </View>
      </View>
      <View style={styles.bottomContent}>
        <View style={{ width: width, height: height / 3,}}>
          <TouchableOpacity
            style={styles.promoBtn}
            onPress={() => {
              bs.current.snapTo(0);
              setCallPromo(true);
            }}
          >
            <Text style={{ color: "#707070" }}>Promocode (If Any)</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.totalBottom}>
          <View style={styles.eachTotalBottom}>
            <View style={styles.totalBottomLeft}>
              <Text style={styles.rightTotalText}>ITEM TOTAL</Text>
            </View>
            <View style={styles.totalBottomRight}>
              <Text style={styles.totalBottomNum}>$ {Order.total}</Text>
            </View>
          </View>
          <View style={styles.eachTotalBottom}>
            <View style={styles.totalBottomLeft}>
              <Text style={styles.rightTotalText}>Taxes & Charges</Text>
            </View>
            <View style={styles.totalBottomRight}>
              <Text style={styles.totalBottomNum}>$ 00.00</Text>
            </View>
          </View>
          <View style={styles.eachTotalBottom}>
            <View style={styles.totalBottomLeft}>
              <Text style={styles.totalLeftFinal}>Grand Total</Text>
            </View>
            <View style={styles.totalBottomRight}>
              <Text style={styles.totalRightFinal}>$ {Order.total}</Text>
            </View>
          </View>
        </View>
        <View style={styles.proccedToPay}>
          <View style={{ flex: 0.5 }}>
            <Text style={styles.procLeftTop}>ORDERING FOR</Text>
            <Text style={styles.procLeftBot}>{Order.customer}</Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <TouchableOpacity
              style={styles.bottomPayBtn}
              onPress={() => {
                bs.current.snapTo(0);
                setcallBillSplit(true);
              }}
            >
              <Text style={styles.botPayBtnTit}>Bill This</Text>
              <RightArrowSVG />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
}
const styles = StyleSheet.create({
  mainTableCart: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  TopDesign: {
    position: "absolute",
    flex: 1,
    top: 0,
    width: width,
    height: height / 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#FF264D",
    alignItems: "center",
    flexDirection: "row",
    elevation: 8,
  },
  pageBack: {
    alignItems: "center",
    flex: 0,
  },
  pageTit: {
    flex: 1,
    textAlign: "center",
    fontSize: height/35,
    color: "#fff",
    fontFamily:"Poppins-Medium",
    marginTop:10
    // marginLeft: -35,
  },
  mainBelowTop: { marginTop:height/10, alignItems: "center",flex:1 },
  pageTitBelow: { width: width, paddingHorizontal: 20, marginVertical: 0 },
  titBelow: { fontSize: 18, fontFamily:"Poppins-SemiBold", color: "#282828" },
  hotNameBelow: { fontSize: 16, fontFamily: "Poppins-SemiBold", color: "#FF264D" },
  tableNo: {
    fontSize: 16,
    fontFamily:"Poppins-SemiBold",
    color: "#282828",
    // marginLeft: 20,
    alignItems: "baseline",
    justifyContent: "flex-start",
  },
  bottomContent: {
    position: "absolute",
    bottom: 0,
    zIndex: 8,
  },
  promoBtn: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#FF264D",
    borderRadius: 20,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  totalBottom: {
    position: "absolute",
    bottom: height/7.5-30,
    width: width,
    height: height / 5,
    backgroundColor: "#F4F4F4",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  proccedToPay: {
    position: "absolute",
    bottom: 0,
    width: width,
    height: height / 7.5,
    backgroundColor: "#FFE4E9",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    flexDirection: "row",
  },
  eachTotalBottom: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 3,
  },
  totalBottomLeft: { flex: 0.5, alignItems: "flex-start" },
  totalBottomRight: { flex: 0.5, alignItems: "flex-end" },
  rightTotalText: { fontFamily:"Poppins-SemiBold", color: "#A9A8A8", fontSize: 14 },
  totalBottomNum: { fontSize: 14, color: "#282828",fontFamily:"Poppins-SemiBold" },
  totalLeftFinal: { fontSize: 16, fontFamily:"Poppins-Bold", color: "#282828" },
  totalRightFinal: { fontSize: 16, fontFamily:"Poppins-Bold", color: "#FF264D" },
  procLeftTop: { fontSize: 14, color: "#FF264D", fontFamily:"Poppins-Bold" },
  procLeftBot: {
    fontSize: 16,
    color: "#4E4A4A",
    fontFamily:"Poppins-Bold",
    marginTop: 2,
  },
  bottomPayBtn: {
    backgroundColor: "#FF264D",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    borderRadius: 15,
    flexDirection: "row",
  },
  botPayBtnTit: {
    color: "#fff",
    fontFamily:"Poppins-SemiBold",
    fontSize: 18,
    marginRight: 10,
  },
  BottomAdd: {
    width: width,
    // height: height,
    elevation: 5,
    backgroundColor: "#fff",
    shadowColor: "grey",
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  searchBarSpace: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginVertical: 20,
  },
  toggleTit: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginTop: 40,
    marginLeft: 20,
  },
  applyPromo: {
    fontSize: 18,
    backgroundColor: "#FF264D",
    color: "#fff",
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    borderRadius: 50,
    elevation: 3,
    fontFamily:"Poppins-Light"
  },
  secondSheet: {
    width: width,
    height: width / 1.35,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#FFE4E9",
    borderRadius: 35,
  },
  secondSheetBtn: {
    width: width - 100,
    height: width / 7,
    backgroundColor: "#FF264D",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 7,
    borderRadius: width / 6,
  },
  secondBtnText: { color: "#fff", fontFamily:"Poppins-Medium", fontSize: 18 },
});
function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}