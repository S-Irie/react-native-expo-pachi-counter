import React, { type FC } from "react";
import Icon from "react-native-vector-icons/Ionicons";

export const IconHome: FC<{ color: string }> = ({ color }) => {
  return <Icon name="home" size={20} color={color} />;
};
