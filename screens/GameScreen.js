import {Text,StyleSheet,View} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';


function GameScreen(){
    return (
        <View>
        <View style={styles.header}>
            <Text style={styles.HeaderText}>Computer Turn</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.HeaderText}>50</Text>
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
        marginTop:100,
        padding:16,
        alignItems:'center',
        textAlign:'center',
        marginHorizontal:24,
        backgroundColor:'#FF4400',
        justifyContent:'center',
    }
    ,
    text:{
        fontSize:32,
        textAlign:'center',
        color:'white'
    }
    ,
    HeaderText:{
        fontSize:32,
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
        alignItems:'center'
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