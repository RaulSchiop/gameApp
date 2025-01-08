import { useState } from 'react';
import { StyleSheet,ImageBackground,SafeAreaView,StatusBar} from 'react-native';
import StartGameScreen from './screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOverScreen';

export default function App() {
  const [number,setNumber]=useState(null);
  const [gameOver,setGameOver]=useState(false)

  function StartGameHandler(pickedNumber){
    setNumber(pickedNumber)
    setGameOver(false)
  }

  function gameOverHandler(){
    setGameOver(true)
  }

  let screen= <StartGameScreen onPick={StartGameHandler}></StartGameScreen> 

  if(number){
    screen=<GameScreen number={number} onGameOver={gameOverHandler}></GameScreen>
  }

  if(gameOver){
    screen= <GameOver></GameOver>
  }

  

  return (
    
    <LinearGradient 
    colors={['#FF4400', 'black',]} 
    style={styles.rootScreen}
    >
        <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.image}
        >
        <SafeAreaView  style={styles.safeArea}>
           {screen}
        </SafeAreaView>
        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
 rootScreen:{
  flex:1,
 }
 ,
 image:{

  opacity:0.25

 }
 ,
 safeArea: {
  flex: 1,
  marginTop:StatusBar.currentHeight+30
},
});
