import React from 'react';
import { 
  ActivityIndicator,
  Alert,
  Image,
  Text, 
  View,
} from 'react-native';

import { useAuth } from '../../hooks/auth';

import IllustrationImage from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background'
import { styles } from './styes';
import { theme } from '../../global/styles/theme';

export function SignIn() {

  const { loading, signIn } = useAuth()
  
  async function handleSignIn() {
    try {
      await signIn();

    } catch (error) {
      Alert.alert(error)
    }
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

          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> :
            <ButtonIcon 
              title={'Entre com Discord'} 
              onPress={handleSignIn}
            />
          }
        </View>
      </View>
    </Background>
  );
}