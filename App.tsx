import React from "react";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";

import { AuthProvider } from './src/hooks/auth'

import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold  } from '@expo-google-fonts/rajdhani';

import { Routes } from './src/routes';
import { Background } from './src/components/Background'

export default function App(){
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  // enquanto as fontes não forem carregadas, retorna a splash screen
  if(!fontsLoaded){
    return <AppLoading />
  }

  return(
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
