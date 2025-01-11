import {
   TextInput,
   View,
   StyleSheet,
   Alert,
   Text,
   FlatList,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen({ onPick, logs }) {
   const [formEntered, setFormEntered] = useState("");

   function numerEnter(enteredText) {
      setFormEntered(enteredText);
   }

   function reset() {
      setFormEntered("");
   }

   function confirm() {
      const num = parseInt(formEntered);
      if (isNaN(num) || num <= 0 || num > 99) {
         Alert.alert("invalid number! ", "NUmber between 1 and 99", [
            { text: "okey", style: "destructive", onPress: reset },
         ]);

         return;
      }

      onPick(num);
   }

   return (
      <View style={{ flex: 1 }}>
         <View style={styles.titleContainer}>
            <Text style={styles.title}>Guess My Number</Text>
         </View>

         <View style={styles.inputContainer}>
            <TextInput
               maxLength={2}
               keyboardType="number-pad"
               autoCapitalize="none"
               style={styles.textInput}
               value={formEntered}
               onChangeText={numerEnter}
            ></TextInput>
            <View style={styles.buttonContainer}>
               <View style={styles.button}>
                  <PrimaryButton onPress={reset}>Reset</PrimaryButton>
               </View>
               <View style={styles.button}>
                  <PrimaryButton onPress={confirm} style={styles.button}>
                     Confirm
                  </PrimaryButton>
               </View>
            </View>
         </View>
         {logs.length === 0 ? (
            <></>
         ) : (
            <View style={styles.containerList}>
               <Text style={styles.title}>Past games</Text>
               <FlatList
                  data={logs}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={(itemData) => (
                     <View style={styles.listWrapper}>
                        <View style={styles.listItem}>
                           <Text
                              style={{
                                 color: "white",
                                 fontSize: 18,
                                 marginHorizontal: 10,
                                 textAlignVertical: "center",
                                 textAlign: "center",
                              }}
                           >
                              {itemData.item.logNumber}.
                           </Text>
                           <Text style={styles.listText}>
                              Opponent guessed: {itemData.item.number}
                           </Text>
                        </View>
                     </View>
                  )}
               ></FlatList>
            </View>
         )}
      </View>
   );
}

const styles = StyleSheet.create({
   inputContainer: {
      marginHorizontal: 24,
      borderRadius: 8,
      padding: 16,
      backgroundColor: "#FF4400",
      elevation: 4,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
      justifyContent: "center",
      alignItems: "center",
   },
   textInput: {
      height: 60,
      fontSize: 32,
      borderBottomColor: "white",
      borderBottomWidth: 1,
      color: "white",
      marginVertical: 8,
      width: 50,
      textAlign: "center",
   },
   buttonContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
   },
   button: {
      flex: 1,
   },
   title: {
      fontSize: 22,
      color: "white",
   },
   titleContainer: {
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderColor: "white",
      borderRadius: 10,
      marginHorizontal: 16,
      padding: 10,
      marginBottom: 20,
   },
   containerList: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
   },
   listItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      padding: 20,
      marginVertical: 4,
      borderRadius: 6,
      backgroundColor: "#FF4400",
      width: "100%",
      elevation: 4,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 6,
   },
   listText: {
      color: "white",
      fontSize: 18,
   },
   listWrapper: {
      width: "93%",
      alignSelf: "center",
   },
});

export default StartGameScreen;
