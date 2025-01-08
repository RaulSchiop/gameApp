import { Text,StyleSheet } from "react-native";

function HeaderText({children}){

    return (
        <Text style={styles.HeaderText}>{children}</Text>
    )

}

const styles=StyleSheet.create({

    HeaderText:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
    }

})

export default HeaderText;