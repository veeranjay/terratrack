import { useNavigation } from '@react-navigation/native';
import { FlatList,View, StyleSheet, TouchableOpacity,Text, ScrollView } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

import {horizontalScale, moderateScale, verticalScale} from "../../customHooks/useMetrics";
const Home = ()=>{
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={sectionStyles.container}>
                <View style={sectionStyles.header}>
                    <Text style={sectionStyles.title}>My Plants</Text>
                    <Text style={sectionStyles.subscript}>2</Text>
                </View>

                <TouchableOpacity style={sectionStyles.button}>
                    <Text style={sectionStyles.buttonText}>View All</Text>
                </TouchableOpacity>



                <View style={sectionStyles.listWrapper}>
                    <FlatList 
                    showsHorizontalScrollIndicator={false}
                    // style={sectionStyles.list}
                    contentContainerStyle={sectionStyles.list}
                    horizontal
                    data={[{name:"add"},{name:"idk"}, {name:"idk"},{name:"idk"},{name:"idk"},{name:"fuck everything"}]} 
                    renderItem={({item})=>{
                        return( 
                            item.name == "add"?
                            <TouchableOpacity onPress={()=>{}} style={sectionStyles.listItemGhost}>
                                <Text>Add</Text>
                            </TouchableOpacity>
                            :
<TouchableOpacity onPress={()=>{navigation.navigate("PlantDetails",{name:"Aloe Vera", scientificName:"IDK", info:{humidity:20, temperature:25, moisture:78, lastScanned:30}})}} style={sectionStyles.listItem}>
                        </TouchableOpacity>);
                    }}/>
                </View>
            </View>
            <View style={sectionStyles.container}>
                <View style={sectionStyles.header}>
                    <Text style={sectionStyles.title}>Explore</Text>
                </View>

                <TouchableOpacity style={sectionStyles.button}>
                    <Text style={sectionStyles.buttonText}>View All</Text>
                </TouchableOpacity>



                <View style={sectionStyles.listWrapper}>
                    <FlatList 
                    showsHorizontalScrollIndicator={false}
                    // style={sectionStyles.list}
                    contentContainerStyle={sectionStyles.list}
                    horizontal
                    data={[{name:"test"},{name:"idk"}, {name:"idk"},{name:"idk"},{name:"idk"},{name:"fuck everything"}]} 
                    renderItem={({item})=>{
                        return( 
                        <TouchableOpacity onPress={()=>{}} style={sectionStyles.listItem}>
                        </TouchableOpacity>
                        );
                        
                    }}/>
                </View>
            </View>
                </ScrollView>

        </View>
    );
}

const Header = ()=>{
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>{
                navigation.openDrawer();
            }}>
                <Text>Open Drawer</Text>
            </TouchableOpacity>
        </View>    
    );
}
const sectionStyles = StyleSheet.create({
    container:{
        // paddingHorizontal: horizontalScale(20),
        paddingVertical:verticalScale(10),
        // backgroundColor:"red",
    },
    header:{
        flexDirection:"row",
        gap:horizontalScale(3),
        paddingHorizontal: horizontalScale(20),
        paddingVertical:verticalScale(20),
        // backgroundColor:"blue",
    },
    title:{
        fontFamily:"Outfit_500Medium",
        fontSize:moderateScale(32),

    },
    subscript:{
        fontFamily:"Outfit_600SemiBold",
        fontSize:moderateScale(12),
    },
    button:{
        marginLeft:"auto",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"black",
        width:horizontalScale(50),
        paddingVertical:verticalScale(5),
        marginRight:horizontalScale(5),
        borderRadius:moderateScale(10)
    },
    buttonText:{
        color:"white",
        fontFamily:"Outfit_500Medium", fontSize:moderateScale(12),
    },
    list:{
        paddingVertical:verticalScale(20),
        paddingHorizontal:horizontalScale(5),
        // backgroundColor:"green",
    },
    listItem:{
        alignItems:"center",
        justifyContent:"center",
        height:verticalScale(220),
        width:horizontalScale(130),
        marginHorizontal:horizontalScale(10),
        backgroundColor:"white",
        borderRadius:moderateScale(30),
        elevation:4
    },
    listItemGhost:{
        alignItems:"center",
        justifyContent:"center",
        height:verticalScale(220),
        width:horizontalScale(130),
        marginHorizontal:horizontalScale(10),
        backgroundColor:"rgba(0,0,0,0.1)",
        borderRadius:moderateScale(30),
    }
});
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
        backgroundColor:"white",

    }
});

export default Home;