import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';

import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles'

type Props = {
   handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds( {handleGuildSelect}: Props){
   const guilds = [
      {
         id: '1',
         name: 'Lendários',
         icon: 'image.png',
         owner: true
      },
      {
         id: '2',
         name: 'Rumo ao topo',
         icon: 'image.png',
         owner: false
      },
      {
         id: '3',
         name: 'Yeah, boy',
         icon: 'image.png',
         owner: false
      },
      {
         id: '4',
         name: 'Valorosos',
         icon: 'image.png',
         owner: false
      },
      {
         id: '5',
         name: 'GTA RolePlay',
         icon: 'image.png',
         owner: false
      },
   ];

   return (
      <View style={styles.container}>
         <FlatList 
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
               <Guild 
                  data={item}
                  onPress={() => handleGuildSelect(item)}
               />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider  />}
            style={styles.guilds}
         />
      </View>
   )
}