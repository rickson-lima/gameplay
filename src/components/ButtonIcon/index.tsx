import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View } from "react-native";

import { styles } from "./styles";
import DiscordImg from '../../assets/discord.png'

type Props = RectButtonProps &{
   title: string;
}

export function ButtonIcon({ title, ...rest } : Props){
   return(
      <RectButton 
         style={styles.container}
         {...rest}
      >
         <View style={styles.iconWrapper}>
            <Image source={DiscordImg} style={styles.icon} />
         </View>

         <Text style={styles.title}>
            { title }
         </Text>
      </RectButton>
   );
}