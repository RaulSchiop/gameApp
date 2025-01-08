import {Text,StyleSheet,View} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { useEffect, useState } from 'react';
import HeaderText from '../components/HeaderText';


function GameScreen({number}){
    const [currentNUmber,setCurrentNumber]=useState('');
    const [tryes,setTryes]=useState([]);
    const [numberRange,setNumberRange]=useState({
        min:1,
        max:99,
    })

    useEffect(()=>{
        function getArandomInRange() {
            setCurrentNumber(Math.floor(Math.random() * (numberRange.max - numberRange.min) + numberRange.min))
        }

        getArandomInRange() 
    
    },[numberRange.max,numberRange.min])

 
    function higher(){

        if(number>currentNUmber){
            setNumberRange({
                min:currentNUmber+1,
                max:99
            })
        }else if(number<currentNUmber){

            

        }



    }

    function lower(){

    }



    return (
        <View>
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
                            <PrimaryButton>+</PrimaryButton>
                        </View>
                        <View style={styles.button}>
                            <PrimaryButton>-</PrimaryButton>
                        </View>
                    </View>
                </View>
            <View>
        
            </View>
        </View>
       
    )
}

const styles=StyleSheet.create({
    container:{
        marginHorizontal:24,
        borderRadius:10,
        borderColor:'white',
        padding:16,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        marginBottom:30
    }
    ,
    header:{
    
        padding:16,
        borderRadius:10,
        alignItems:'center',
        textAlign:'center',
        marginHorizontal:24,
        backgroundColor:'#FF4400',
        justifyContent:'center',
    }
    ,
    text:{
        fontSize:22,
        textAlign:'center',
        color:'white'
    }
    ,
    containerButtons:{
        marginHorizontal:24,
        borderRadius:8,
        padding:16,
        marginTop:50,
        backgroundColor:'#FF4400',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0 ,height: 2},
        shadowOpacity:0.25,
        shadowRadius:6,
        justifyContent:'center',
        alignItems:'center',
    }
    ,
    twoButtons:{
        flexDirection:'row',
    }
    ,
    button:{
        flex:1,
    }

})

export default GameScreen;