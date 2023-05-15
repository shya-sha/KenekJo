import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './src/screens/HomeScreen';
import LivingRoom from './src/screens/LivingRoom';
import BathRoom from './src/screens/Bathroom';
import Kitchen from './src/screens/Kitchen';
import Profile from './src/screens/Profile';
import orderHistory from './src/screens/OrderHistory';
import Chat from './src/screens/Chat';
import Setting from './src/screens/Setting';
import Pemesanan from './src/screens/Pemesanan';
import Pembayaran from './src/screens/Pembayaran';
import LogIn from "./src/Pages/LogIn";
import SignUp from "./src/Pages/SignUp";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LivingRoom"
          component={LivingRoom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bathroom"
          component={BathRoom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Kitchen"
          component={Kitchen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={orderHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="orderHistory"
          component={orderHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pemesanan"
          component={Pemesanan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pembayaran"
          component={Pembayaran}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
