import React from 'react';
import { 
  Image,
  Text, 
  View,
} from 'react-native';

import IllustrationImage from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background'
import { styles } from './styes';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return(
    <Background>
      <View style={styles.container}>
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
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}