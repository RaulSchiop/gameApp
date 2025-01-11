import { Text, StyleSheet, View, FlatList, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import HeaderText from "../components/HeaderText";

function GameScreen({ number, onGameOver,getTryes }) {
   const [currentNUmber, setCurrentNumber] = useState("");

   const [tryes, setTryes] = useState([]);
   const [numberRange, setNumberRange] = useState({
      min: 1,
      max: 99,
      try: 0,
   });

   useEffect(() => {
      function getArandomInRange() {
         setCurrentNumber(
            Math.floor(
               Math.random() * (numberRange.max - numberRange.min) +
                  numberRange.min
            )
         );
      }

      getArandomInRange();
   }, [numberRange]);

   useEffect(() => {
      if (number === currentNUmber) {
         onGameOver();
         getTryes(numberRange.try)
      }
   }, [currentNUmber, onGameOver, number]);

   function higher() {
      if (number > currentNUmber) {
         setTryes((prev) => [...prev, currentNUmber]);
         setNumberRange((prevRange) => ({
            min: currentNUmber + 1,
            max: prevRange.max,
            try: prevRange.try + 1,
         }));
      } else if (number < currentNUmber) {
         Alert.alert("invalid number! ", "you lied!", [
            { text: "dont lie again", style: "destructive" },
         ]);
         return;
      }
      console.log(numberRange.try);
   }

   function lower() {
      if (number < currentNUmber) {
         setTryes((prev) => [...prev, currentNUmber]);
         setNumberRange((prevRange) => ({
            min: prevRange.min,
            max: currentNUmber - 1,
            try: prevRange.try + 1,
         }));
      } else if (number > currentNUmber) {
         Alert.alert("invalid number! ", "you lied!", [
            { text: "dont lie again", style: "destructive" },
         ]);
         return;
      }
      console.log(tryes);
   }

   return (
      <View style={{flex:1}}>
         <View style={styles.header}>
            <HeaderText style={styles.HeaderText}>Computer Turn</HeaderText>
         </View>
         <View style={styles.container}>
            <HeaderText>{currentNUmber}</HeaderText>
         </View>
         <View style={styles.containerButtons}>
            <Text style={styles.text}>Higher or lower</Text>
            <View style={styles.twoButtons}>
               <View style={styles.button}>
                  <PrimaryButton onPress={higher}>
                    <Ionicons name="add" size={20} color="black" ></Ionicons>
                  </PrimaryButton>
               </View>
               <View style={styles.button}>
                  <PrimaryButton onPress={lower}>
                  <Ionicons name="remove" size={20} color="black" ></Ionicons>
                  </PrimaryButton>
               </View>
            </View>
         </View>
         <View style={styles.containerList}>
            <FlatList
               data={tryes}
               keyExtractor={(item, index) => index.toString()}
               renderItem={(itemData) => (
                  <View style={styles.listItem}>
                     <Text style={styles.listText}>
                        Attempt: {itemData.item}
                     </Text>
                  </View>
               )}
            />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 24,
      borderRadius: 10,
      borderColor: "white",
      padding: 16,
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      marginBottom: 30,
   },
   header: {
      padding: 16,
      borderRadius: 10,
      alignItems: "center",
      textAlign: "center",
      marginHorizontal: 24,
      backgroundColor: "#FF4400",
      justifyContent: "center",
   },
   text: {
      fontSize: 22,
      textAlign: "center",
      color: "white",
   },
   containerButtons: {
      marginHorizontal: 24,
      borderRadius: 8,
      padding: 16,
      marginTop: 10,
      backgroundColor: "#FF4400",
      elevation: 4,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
      justifyContent: "center",
      alignItems: "center",
   },
   twoButtons: {
      flexDirection: "row",
      padding: 10,
   },
   button: {
      flex: 1,
   },
   containerList: {
      marginTop: 10,
      flex:5
      
   },
   listItem: {
      marginTop: 4,
      padding: 8,
      marginVertical: 4,
      marginHorizontal: 24,
      borderRadius: 6,
      backgroundColor: "#FF4400",
   },
   listText: {
      color: "white",
      fontSize: 18,
      textAlign: "center",
   },
});

export default GameScreen;
