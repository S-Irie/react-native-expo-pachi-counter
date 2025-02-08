import React from "react";
import { registerRootComponent } from "expo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { IconList } from "@/components/icons/IconList";
import { IconSetting } from "@/components/icons/IconSetting";
import { tabActiveColor, tabInactiveColor } from "@/constants/color";
import { ListScreen } from "./List";
import { SettingScreen } from "./Setting";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: tabActiveColor,
          tabBarInactiveTintColor: tabInactiveColor,
        }}
      >
        <Tab.Screen
          name="一覧"
          component={ListScreen}
          options={{ tabBarIcon: ({ color }) => <IconList color={color} /> }}
        />
        <Tab.Screen
          name="設定"
          component={SettingScreen}
          options={{ tabBarIcon: ({ color }) => <IconSetting color={color} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);
