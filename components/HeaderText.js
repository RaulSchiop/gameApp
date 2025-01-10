import { Text,StyleSheet } from "react-native";

function HeaderText({children,style}){

    return (
        <Text style={[styles.HeaderText,style]}>{children}</Text>
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