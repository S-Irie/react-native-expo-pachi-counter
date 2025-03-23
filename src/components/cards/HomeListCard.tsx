import { type FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export type HomeListCardProps = {
  // ID
  id: string;
  // タイトル
  title: string;
  // 総投資額
  useAmount?: number;
  // 総回転数
  totalRotation?: number;
  // 最終更新日
  lastUpdate?: string;
};

export const HomeListCard: FC<HomeListCardProps> = ({
  title,
  useAmount,
  totalRotation,
  lastUpdate,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subContainer}>
        <Text style={styles.text}>{`総投資額 : ${useAmount}円`}</Text>
        <View style={styles.flexRow}>
          <Text style={styles.text}>{`総回転数 : ${totalRotation}回`}</Text>
          <Text style={styles.text}>{`最終更新 : ${lastUpdate}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "white",
    gap: 8,
    borderRadius: 8,
    // shadow（調整したい）
    shadowColor: "#52006A",
    shadowOpacity: 0.16,
    shadowRadius: 8,
    shadowOffset: {
      width: 2,
      height: 8,
    },
    elevation: 20,
  },
  subContainer: {
    display: "flex",
    gap: 4,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(51, 51, 51, 0.8)",
  },
  text: {
    fontSize: 14,
    color: "rgba(51, 51, 51, 0.5)",
  },
});
