import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect,useState } from 'react';
import { View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from "../../customHooks/useMetrics";



import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const Details = ()=>{
    const navigation = useNavigation();
    const {params} = useRoute();

    useEffect(()=>{
        if(params == null)navigation.navigate("Dashboard");
    },[]);

    const [selectedTab, setSelectedTab] = useState("status");
    return (
        <View style={styles.container}>
                        <LinearGradient
    // Background Linear Gradient
    colors={['transparent','rgba(0,0,0,0.2)']}
    style={{position:"absolute",width:"100%", height:"100%"}}
                />
            <Header />

            <View style={styles.body}>
                <View style={styles.details}>
                    <View style={styles.head}>
                        <Text style={styles.title}>
                            Plant Details
                        </Text>
                        <View style={{flexDirection:"column", alignItems:"center"}}>
                            <Text style={styles.lastScanned}> 
                            Last Scanned: 
                            </Text>
                            <Text style={styles.lastScanned}> 
                            {params.info.lastScanned} Hrs Ago
                            </Text>
                        </View>
                        
                    </View>
                    <View style={{
                        backgroundColor:"rgba(255,255,255,0.5)",
                        flexDirection:"column", alignItems:"center",
                        justifyContent:"center",
                        paddingHorizontal:horizontalScale(40),
                        paddingVertical:verticalScale(15),
                        borderWidth:moderateScale(2),
                        borderColor:"white",
                        borderRadius:moderateScale(20),
                        
                    }}>
                        <Text style={{fontFamily:"Outfit_500Medium", fontSize:moderateScale(20)}}>
                            {params.name}
                        </Text>
                        <Text style={{fontFamily:"Outfit_400Regular", fontSize:moderateScale(14)}}>
                            {params.scientificName}
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardHead}>
                            <Text style={styles.cardTitle}>{selectedTab=="status"?"Status":"Recommended"}</Text>
                        </View>
                    
                        {selectedTab=="status"?
                            <View style={styles.status}>
                                <View style={styles.statusFloat}>
                                {/* <FontAwesomeIcon icon="airbnb" />                                */}
                                <View style={styles.statusInfo}>
                                    <Text style={{fontFamily:"Outfit_500Medium", fontSize:moderateScale(14), color:"rgba(0,0,0,0.7)"}}>Humidity</Text>
                                        <Text style={{fontFamily:"Outfit_500Medium", fontSize:moderateScale(20)}}>{params.info.humidity}%</Text>
                                    </View>
                                </View>
                                <View style={styles.statusFloat}>
                                    <View style={styles.statusInfo}>
                                        <Text style={{fontFamily:"Outfit_500Medium", fontSize:moderateScale(14), color:"rgba(0,0,0,0.7)"}}>Temperature</Text>
                                        <Text style={{fontFamily:"Outfit_500Medium", fontSize:moderateScale(20)}}>{params.info.temperature} C</Text>
                                    </View>
                                </View>
                                <View style={styles.statusFloat}>
                                    <View style={styles.statusInfo}>
                                    <Text style={{fontFamily:"Outfit_500Medium", fontSize:moderateScale(14), color:"rgba(0,0,0,0.7)"}}>Moisture</Text>
                                        <Text style={{fontFamily:"Outfit_500Medium", fontSize:moderateScale(20)}}>{params.info.moisture}%</Text>
                                    </View>
                                </View>
                            </View>
                        :<View></View>}
                        <View style={styles.tabButtons}>
                            <TouchableOpacity activeOpacity={1} onPress={()=>{setSelectedTab("status")}} style={[styles.button, {borderTopRightRadius:moderateScale(20)},selectedTab=="status"&&{backgroundColor:"black"}]}>
                                <Text style={[,styles.buttonText, selectedTab=="status"&&{color:"white"}]}>Status</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={()=>{setSelectedTab("recommended")}} style={[styles.button,{borderTopLeftRadius:moderateScale(20)},selectedTab=="recommended"&&{backgroundColor:"black"}]}>
                                <Text style={[styles.buttonText, selectedTab=="recommended"&&{color:"white"}]}>Recommended</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
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
        backgroundColor:"white"
    },
    header:{
        width:'100%', height:verticalScale(70),
        paddingHorizontal:horizontalScale(10), 
        paddingTop:verticalScale(35),
        flexDirection:"column",
        backgroundColor:"transparent",

    },
    body:{
        flex:1,justifyContent:"center", alignItems:"center",
        // backgroundColor:"red"
    },
    details:{
        width:"100%", height:"100%",flexDirection:"column", alignItems:"center",
        // backgroundColor:"green"`
    },
    head:{
        flexDirection:"column",alignItems:"center", justifyContent:"center",
        paddingHorizontal:horizontalScale(10),
        paddingVertical:verticalScale(10),
        gap:verticalScale(6)
        // backgroundColor:"blue"
    },
    title:{
        fontFamily:"Outfit_500Medium",
        fontSize:moderateScale(32)
    },
    lastScanned:{
        fontFamily:"Outfit_500Medium",
        fontSize:moderateScale(15),
        color:'rgba(0,0,0,0.6)'
    },

    card:{
        position:"absolute", bottom:0,
        width:"100%", flexDirection:"column",
        alignItems:"center",
        height:verticalScale(320),
        backgroundColor:"white",
        borderTopLeftRadius:moderateScale(50),
        borderTopRightRadius:moderateScale(50),
        overflow:"hidden",
        elevation:18,

        

    },
    cardHead:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:verticalScale(20),
        // backgroundColor:"blue",
    },
    cardTitle:{
        fontFamily:"Outfit_500Medium",
        fontSize:moderateScale(32)
    },
    tabButtons:{
        width:"100%",
        marginTop:"auto",
        flexDirection:"row",
        // backgroundColor:"red"
    },
    button:{
        flex:1,
        paddingVertical:verticalScale(15),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
    },
    buttonText:{
        color:"black",
        fontFamily:"Outfit_500Medium",
        fontSize:moderateScale(18)
    },

    status:{
        flexDirection:"row",
        gap:horizontalScale(20),
        // backgroundColor:"red"
    },
    statusFloat:{
        flexDirection:"column",
        width:horizontalScale(90),
        paddingVertical:verticalScale(70),
        backgroundColor:"white",
        borderRadius:moderateScale(100),
        elevation:2

    },
    statusInfo:{
        flexDirection:"column",
        alignItems:"center", justifyContent:"center"
    }
    
});


export default Details;