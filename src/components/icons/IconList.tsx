import React, { type FC } from "react";
import Icon from "react-native-vector-icons/Ionicons";

export const IconList: FC<{ color: string }> = ({ color }) => {
  return <Icon name="list" size={20} color={color} />;
};
