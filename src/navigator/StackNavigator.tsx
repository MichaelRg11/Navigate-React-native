import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1 } from '../screens/Pagina1';
import { Pagina2 } from '../screens/Pagina2';
import { Pagina3 } from '../screens/Pagina3';
import { Persona } from '../screens/Persona';

export type RootStackParams = {
  Pagina1: undefined;
  Pagina2: undefined;
  Pagina3: undefined;
  Persona: { id: number, name: string };
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false,
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent' //Estipo para celulares ios
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Pagina1" options={{ title: 'pagina 1' }} component={Pagina1} />
      <Stack.Screen name="Persona" options={{ title: 'pagina persona' }} component={Persona} />
      <Stack.Screen name="Pagina2" options={{ title: 'pagina 2' }} component={Pagina2} />
      <Stack.Screen name="Pagina3" options={{ title: 'pagina 3' }} component={Pagina3} />
    </Stack.Navigator>
  );
}