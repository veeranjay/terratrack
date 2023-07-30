import 'react-native-gesture-handler';


import { useCallback } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';


// Components
import Header from "./components/Header";


//Screens
import Welcome from "./pages/Welcome/Welcome";
import Pair from './pages/Pair Device/Pair';
import Dashboard from './pages/Dashboard/Dashboard';

import { useFonts, Outfit_400Regular,Outfit_500Medium,Outfit_600SemiBold, Outfit_700Bold  } from '@expo-google-fonts/outfit';
import Details from './pages/Details/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts(
    {Outfit_400Regular, Outfit_500Medium, Outfit_600SemiBold, Outfit_700Bold}
  );

  if (!fontsLoaded) {
    return null;
  }
  return (

    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false, animation:"slide_from_right" }}>
      <Stack.Screen name="Pair" component={Pair}/>
      <Stack.Screen name="Dashboard" component={Dashboard}/>
      <Stack.Screen name="PlantDetails" component={Details}/>
      

      </Stack.Navigator>
  </NavigationContainer>
  );
}
