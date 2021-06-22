import React from 'react';
import { 
  Image,
  Text, 
  View,
  StatusBar
} from 'react-native';

import { styles } from './styes';
import IllustrationImage from '../../assets/illustration.png'

import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn() {
  return(
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image 
        source={IllustrationImage} 
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"}
          e organize suas {"\n"}
          jogatinas {"\n"}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title={'Entre com Discord'} 
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
}