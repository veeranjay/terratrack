import {View,Text,StyleSheet} from "react-native";
const Welcome = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Text>deddd</Text>
        </View>
    );
}

// pseudo statusbar component that acts as a padding
const StatusBar = ()=>{
    return (
        <View styles={styles.statusBar}>
        </View>
    );
}

const styles = StyleSheet.create({
    statusBar:{
        flex:1
    },

    container:{
        flex:1,
        backgroundColor:"white"
    }
});

export default Welcome;