import React, { useState } from "react";
import { FlatList, View } from "react-native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Background } from '../../components/Background'
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [category, setCategory] = useState("");

  const navigation = useNavigation()

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: false,
      },
      category: "2",
      date: "22/06 às 20:45",
      description: " Bora de ARAMzada até o sol raiar",
    },
    {
      id: "2",
      guild: {
        id: "2",
        name: "Yeah, boy",
        icon: null,
        owner: false,
      },
      category: "3",
      date: "24/06 às 22:10",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "3",
      guild: {
        id: "2",
        name: "Rumo ao topo",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "30/06 às 18:00",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "4",
      guild: {
        id: "4",
        name: "Bora queimar tudo",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "31/06 às 00:00",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "5",
      guild: {
        id: "2",
        name: "Valorosos",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "01/07 às 21:00",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "6",
      guild: {
        id: "2",
        name: "GTA RolePLay",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "01/07 às 23:45",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails');
  }

  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 3" />

        <FlatList
          style={styles.matches}
          data={appointments}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Appointment 
              data={item} 
              onPress={handleAppointmentDetails}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </Background>
  );
}
