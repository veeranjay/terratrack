import { useNavigation, useRoute } from "@react-navigation/native";
import {View,StyleSheet, Text} from "react-native";
const Header = ()=>{
    const navigation = useNavigation();
    const route = useRoute();
    return (
    <View style={styles.container}>
        <Text>{route.name}</Text>
    </View>);
}
const styles = StyleSheet.create({
    container:{
        flex:1, 
        display:"flex", flexDirection:"row",
        alignItems:"center", 
        backgroundColor:"white"
    }
});
export default Header;