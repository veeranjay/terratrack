import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Explore from './Explore';
// Screens
import Home from './Home';
import MyPlants from './MyPlants';


const Drawer = createDrawerNavigator();
const Dashboard = () => { 
    return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="My Plants" component={MyPlants} />
        <Drawer.Screen name="Explore" component={Explore} />
    </Drawer.Navigator>
    );
}
export default Dashboard;