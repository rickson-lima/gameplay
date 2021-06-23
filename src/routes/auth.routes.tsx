// arquivo dedicado para as rotas que o user tem acesso quando está autenticado

import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SingIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
   return(
      <Navigator
         headerMode="none"
         screenOptions={{
            cardStyle: {
               backgroundColor: 'transparent'
            }
         }}
      >
         <Screen
            name="SignIn"
            component={SignIn}
         />

         <Screen
            name="Home"
            component={Home}
         />
      </Navigator>
   )
}