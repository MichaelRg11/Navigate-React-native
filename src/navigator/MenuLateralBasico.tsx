import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Setting } from '../screens/Setting';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  const { width, height } = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerType={width > height ? 'permanent' : 'slide'}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
      <Drawer.Screen name="Setting" options={{ title: 'Setting' }} component={Setting} />
    </Drawer.Navigator>
  );
}