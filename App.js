import { useState } from "react";
import {
   StyleSheet,
   ImageBackground,
   SafeAreaView,
   StatusBar,
} from "react-native";
import StartGameScreen from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOverScreen";

export default function App() {
   const [number, setNumber] = useState(null);
   const [gameOver, setGameOver] = useState(false);
   const [tryes, setTryes] = useState();
   const [gameLogs, setgameLogs] = useState([]);

   function StartGameHandler(pickedNumber) {
      setNumber(pickedNumber);
      setGameOver(false);
   }

   function gameOverHandler() {
      setGameOver(true);
   }

   function getTryes(tryes) {
      setTryes(tryes);
   }

   function startNewGame() {
      setgameLogs((prev) => [
         ...prev,
         { logNumber: prev.length + 1, pastTryes: tryes, number },
      ]);
      setNumber(null);
      setTryes(0);
      setGameOver(false);
   }

   let screen = (
      <StartGameScreen
         logs={gameLogs}
         onPick={StartGameHandler}
      ></StartGameScreen>
   );

   if (number) {
      screen = (
         <GameScreen
            getTryes={getTryes}
            number={number}
            onGameOver={gameOverHandler}
         ></GameScreen>
      );
   }

   if (gameOver) {
      screen = (
         <GameOver
            tryes={tryes}
            number={number}
            startAgain={startNewGame}
         ></GameOver>
      );
   }

   return (
      <LinearGradient colors={["#FF4400", "black"]} style={styles.rootScreen}>
         <ImageBackground
            source={require("./assets/images/background.png")}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.image}
         >
            <SafeAreaView style={styles.safeArea}>{screen}</SafeAreaView>
         </ImageBackground>
      </LinearGradient>
   );
}

const styles = StyleSheet.create({
   rootScreen: {
      flex: 1,
   },
   image: {
      opacity: 0.25,
   },
   safeArea: {
      flex: 1,
      marginTop: StatusBar.currentHeight + 30,
   },
});
