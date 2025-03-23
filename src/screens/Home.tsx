import { useState, type FC } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  HomeListCard,
  type HomeListCardProps,
} from "@/components/cards/HomeListCard";

const MOCK_DATA: HomeListCardProps[] = [
  {
    id: "1",
    title: "タイトル",
    useAmount: 10000,
    totalRotation: 100,
    lastUpdate: "2025-01-01",
  },
  {
    id: "2",
    title: "タイトル2",
    useAmount: 20000,
    totalRotation: 200,
    lastUpdate: "2025-01-02",
  },
];

export const HomeScreen: FC = () => {
  const [dataList] = useState<HomeListCardProps[]>(MOCK_DATA);

  return (
    <View>
      <View style={styles.container}>
        {dataList.map((data) => {
          return <HomeListCard {...data} key={data.id} />;
        })}
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    gap: 12,
  },
});
