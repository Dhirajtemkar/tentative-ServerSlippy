import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import Ready from "../SingleOrderList/Ready";
import GenBill from "../SingleOrderList/GenBill";
import ServerImg from "../img/server";
import Menu from "../img/menu";
import { CustomerOrder } from "../CustomerOrder/CustomerOrder";
import MenuToggle from "../TopNav/MenuToggle";
import TopNav from "../TopNav/TopNav";

const Billing=({navigation})=>{
    
  const [tab, setTab] = React.useState(0);

  
  let [fontsLoaded] = useFonts({
   "Poppins-Light": require('../../assets/fonts/Poppins-Light.ttf')
 });
  

 font1=font2="#9a9795"

   
   switch (tab) {
       case 0:{
       var  font1 = "#ffffff";
       var leftShift=windowWidth*0.08
      var  width=windowWidth/3
         break;}
       case 1:{
       var  font2 = "#ffffff";
       var leftShift=windowWidth/1.6;
       var  width=windowWidth/4

           break;}

     }
     if (!fontsLoaded) {
       return <AppLoading />;}
       else{

   return (
     <View style={styles.container}>
     <View style={styles.titleContainer}>
       <View style={styles.ContainerTwo}>
         <TopNav navigation={navigation} />
         <View style={{ flexDirection: "row", top:2}}>
         <View style={{ flexDirection: "column", top: windowHeight/120}}>
         <Text style={styles.name}>54th Ave, Marques St..</Text>
           <View style={styles.titleTag}>
             <Text
               style={{
                 fontFamily: "Poppins-Light",
                 color: "#ff264d",
                 fontSize: 19,
                 lineHeight: 29,
               }}
             >
               Mike's cafe
             </Text>
           </View>
         </View>
         <ServerImg style={{ left: windowWidth * 0.3, top:15}} />
         </View>
       </View>
     </View>

           <View style={styles.statusContainer}>
               <View style={styles.tabContainer}>
               <View style={{flex:1,backgroundColor:'#ff264d',position:"absolute",top:windowHeight*0.005,width:width,height:windowHeight*0.05,left:leftShift,borderRadius:20}}/>
                   
                   <TouchableOpacity style={styles.button} onPress = {() => setTab(0)}> 
                       <Text style={{fontFamily:"Poppins-Light", fontSize:18, color:font1, textAlign:"center"}} >Generate Bill</Text>
                   </TouchableOpacity>
                   
                   <TouchableOpacity style={styles.button} onPress = {() => setTab(1)} >
                       <Text style={{fontFamily:"Poppins-Light", fontSize:18, color:font2, textAlign:"center",}}>Ready</Text>
                   </TouchableOpacity>
                   
               </View>
               
               <View style={styles.stateList}>
                   {tab==0?<GenBill 
                   orderDetail={CustomerOrder}
                   navigation={navigation}
                   pageRoutedFrom={"ServerPrep"}/>
                   :<Ready  
                   orderDetail={CustomerOrder}
                   navigation={navigation}
                   pageRoutedFrom={"ServerPrep"}/>}

               </View>
           </View>   
       </View>

         
   );
   }

}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
 },

 ContainerTwo: {
   flex: 1,
   backgroundColor: "#ff264d",
   borderBottomRightRadius: 20,
   borderBottomLeftRadius: 20,
 },
 titleContainer: {
   width: windowWidth,
   height: windowHeight / 4.3,
   borderBottomLeftRadius: windowWidth / 9,
   borderBottomRightRadius: windowWidth / 9,
   backgroundColor: "#FF264D",
   elevation: 5,
 },
 name: {
   color: "#ffffff",
   fontFamily: "Poppins-Light",
   fontSize: 19,
   lineHeight: 29,
   left: 0.12 * windowWidth,
   top: 2,
 },

 titleTag: {
   backgroundColor: "#ffffff",
   width: 0.32 * windowWidth,
   left: 0.12 * windowWidth,
   height: 0.05 * windowHeight,
   borderRadius: 20,
   alignItems: "center",
   alignItems: "center",
   justifyContent: "center",
   top:5
 },
 serverImg: {
   height: 140,
   width: 70,
   left: 0.45 * windowWidth,
   resizeMode: "cover",
 },

 statusContainer: {
   height: windowHeight/17
   ,
 },

 tabContainer: {
   flexDirection: "row",
   borderBottomColor: "#989494",
   borderBottomWidth: 2,
 },
 button: {
   flex: 1,
   height: 0.06 * windowHeight,
   alignItems: "center",
   justifyContent: "center",
 },
 stateList: {
  height:windowHeight-(windowHeight/4.3)-(windowHeight/12)-(windowHeight/17)-5,
  flexDirection: "row",
   backgroundColor: "#e5e5e5",
   borderBottomColor: 5,
   backgroundColor: "#fff",
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
export default Billing;