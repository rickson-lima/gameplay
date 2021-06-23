import React, { useState } from "react";
import { FlatList, View } from "react-native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "LoLzinho",
        icon: null,
        owner: false,
      },
      category: "2",
      date: "22/06 às 20:45",
      description: "Bora de ARAMzada até o sol raiar",
    },
    {
      id: "2",
      guild: {
        id: "2",
        name: "GTA RolePlay",
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
        name: "CeluLoL",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "30/06 às 18:00",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
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
          renderItem={({ item }) => <Appointment data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </View>
  );
}
