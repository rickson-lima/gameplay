import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
   const uri = "https://i.redd.it/s9biyhs4lix61.jpg"
   return(
      <Image 
         source={{ uri }}
         style={styles.image}
         resizeMode="cover"
      />
   )
}