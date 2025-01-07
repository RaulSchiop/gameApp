
import {View,Text,Pressable, StyleSheet} from 'react-native'

function PrimaryButton({children,onPress}){
    return (
       
            <View style={styles.buttonOuther}>
                 <Pressable style={({pressed})=>pressed ? [styles.pressed,styles.container]  : styles.container } onPress={onPress}  android_ripple={{color:"#BCBCBC"}}>
                    <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>
    
    )
}

const styles=StyleSheet.create({
    buttonOuther:{
        borderRadius:28,
        margin:4,
        overflow:'hidden',

    }
    ,
    container:{
        backgroundColor:"white",
        paddingHorizontal:10,
        paddingVertical:5,
        elevation:8,
      
    }    
    ,
    buttonText:{
        color:"black",
        textAlign:'center'
    }
    ,
    pressed:{
        opacity:0.74,

    }
})

export default PrimaryButton