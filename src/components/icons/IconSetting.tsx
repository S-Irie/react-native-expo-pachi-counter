import React, { type FC } from "react";
import Icon from "react-native-vector-icons/Ionicons";

export const IconSetting: FC<{ color: string }> = ({ color }) => {
  return <Icon name="settings" size={20} color={color} />;
};
