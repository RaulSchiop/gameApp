import { useState } from 'react';
import { StyleSheet,ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [number,setNumber]=useState(null);

  function StartGameHandler(pickedNumber){
    setNumber(pickedNumber)
  }

  let screen= <StartGameScreen onPick={StartGameHandler}></StartGameScreen> 

  if(number){
    screen=<GameScreen></GameScreen>
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
           {screen}
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
});
