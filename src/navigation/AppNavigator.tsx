import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TreasuryBillsScreen from '../screens/TreasuryBillsScreen';
import AdminLoginScreen from '../screens/AdminLoginScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="TreasuryBills" component={TreasuryBillsScreen} />
    <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
