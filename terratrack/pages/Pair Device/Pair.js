import {Text,View, StyleSheet, TouchableOpacity} from "react-native";
import {verticalScale, horizontalScale, moderateScale} from "../../customHooks/useMetrics"
import { useNavigation} from "@react-navigation/native";



import useBLE from "../../customHooks/useBLE"; 

import { useEffect, useState } from "react";

const Pair = ()=>{

    const [bluetoothConnected, setBluetoothConnected] = useState(false);
    const {
        requestPermissions,
        scanForPeripherals,
    } = useBLE();

    useEffect(async ()=>{

        const isPermissionGranted = await requestPermissions();
    },[]);


    return (
        <View style={styles.container}>
            <Header />
            {
                bluetoothConnected
                ? <View></View>
                : <ConnectToBluetoothScreen />
            }

        </View>
    );
}

const ConnectToBluetoothScreen = () =>{
    return (
    <View style={{
        width:"100%", height:"100%",
        flexDirection:"column", alignItems:"center", justifyContent:"center"
        }}>
            <View style={{
                flexDirection:"column",
                gap:verticalScale(20),
            }}>
            <Text style={{
                fontFamily:"Outfit_500Medium",
                fontSize:moderateScale(32),
            }}>Turn on Bluetooth</Text>
            <Text style={{
                fontFamily:"Outfit_400Regular",
                fontSize:moderateScale(18),
                color:"rgba(0,0,0,0.6)"
            }}>Make sure Bluetooth on your device is on</Text>
            </View>
            
    </View>
    );
}
const Scanning = () =>{
    const [scanning, setScanning] = useState(true);
    useEffect(()=>{},[]);
    return (
        <View style={{
            width:"100%", height:"100%",
            flexDirection:"column",
        }}>
            <Text style={
                {
                    fontFamily:"Outfit_400Regular",
                    fontSize:moderateScale(18),
                    color:"rgba(0,0,0,0.6)"
                }
            }>ADDING YOUR X Æ A-Xii</Text>

            {scanning?
        <View>Scanning....</View>
        :<View>Scan Results</View>    
        }
        </View>
    );
}
const Header = ()=>{
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>{
                navigation.goBack();
            }}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>    
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1, flexDirection:"column",
        backgroundColor:"red"
    },
    header:{
        width:'100%', height:verticalScale(70),
        paddingHorizontal:horizontalScale(10), 
        paddingTop:verticalScale(35),
        flexDirection:"column",
        backgroundColor:"transparent",

    },
});

export default Pair;