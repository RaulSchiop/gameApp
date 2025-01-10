import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import HeaderText from "../components/HeaderText";
import PrimaryButton from "../components/PrimaryButton";

function GameOver({ number }) {
   return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1,marginBottom:50 }}>
         <HeaderText style={{ fontSize: 60 }}>Game Over</HeaderText>

         <View style={styles.imageStyleContainer}>
            <Image
               style={styles.image}
               source={require("../assets/images/success.png")}
            ></Image>
         </View>

         <Text style={styles.summaryBox}>
            The computer took <Text style={styles.accerntFinal}>{number} </Text>
            tryes to guess the number{" "}
            <Text style={styles.accerntFinal}>{number}</Text>
         </Text>
         <View style={styles.buttonOuther}>
            <Pressable  style={({pressed})=>pressed?[styles.pressed,styles.buttonContainer]:styles.buttonContainer} android_ripple={{color:"#BCBCBC"}}>
               <Text style={styles.buttonText}>Start Again</Text>
            </Pressable>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   summaryBox: {
     
      color: "white",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 20,
      borderWidth: 2,
      borderRadius: 10,
      padding: 8,
      borderColor: "#FF4400",
      width: "90%",
      textAlign: "center",
   },
   accerntFinal: {
      color: "#89CFF0",
   },
   textFinalNumber: {
      marginTop: 20,
      fontSize: 20,
      color: "white",
      alignItems: "center",
      justifyContent: "center",
   },
   imageStyleContainer: {
      borderRadius: 200,
      width: 300,
      height: 300,
      borderWidth: 3,
      borderColor: "#FF4400",
      overflow: "hidden",
      margin: 36,
   },
   image: {
      width: "100%",
      height: "100%",
   },
   buttonText: {
      color: "white",
      fontSize: 15,
   },
   buttonContainer: {
      backgroundColor: "#FF4400",
      padding: 10,
   },
   buttonOuther: {
      borderRadius: 20,
      margin: 30,
      overflow: "hidden",
   },
   pressed:{
    opacity:0.74,
   }
});

export default GameOver;
