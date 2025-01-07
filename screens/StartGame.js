import {TextInput,View,StyleSheet,Alert} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'


function StartGameScreen({onPick}){

  
    const [formEntered,setFormEntered]=useState('');

    function numerEnter(enteredText){
        setFormEntered(enteredText)
    }

    function reset(){
        setFormEntered('');
    }


   function confirm(){

    const num=parseInt(formEntered);
    if(isNaN(num) || num<=0 || num >99){

        Alert.alert('invalid number! ','NUmber between 1 and 99',[{text:"okey",style:'destructive',onPress:reset}]);
       
        return;

    }

    
    onPick(num)

    }



    return(
       <View style={styles.inputContainer}>
            <TextInput 
                maxLength={2} 
                keyboardType='number-pad'  
                autoCapitalize='none' 
                style={styles.textInput}
                value={formEntered}
                onChangeText={numerEnter}
                ></TextInput>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <PrimaryButton onPress={reset}>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton onPress={confirm} style={styles.button}>Confirm</PrimaryButton>
                </View>
            </View>
            
       </View>
    )
}

const styles= StyleSheet.create({
    inputContainer:{
        marginHorizontal:24,
        borderRadius:8,
        padding:16,
        marginTop:100,
        backgroundColor:'#FF4400',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0 ,height: 2},
        shadowOpacity:0.25,
        shadowRadius:6,
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        height:60,
        fontSize:32,
        borderBottomColor:'white',
        borderBottomWidth:1,
        color:"white",
        marginVertical:8,
        width:50,
        textAlign:'center'
    }
    ,
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
    ,
    button:{
        flex:1
    }
})

export default StartGameScreen