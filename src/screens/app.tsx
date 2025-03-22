import React from "react";
import { registerRootComponent } from "expo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { IconHome } from "@/components/icons/IconHome";
import { IconSetting } from "@/components/icons/IconSetting";
import { tabActiveColor, tabInactiveColor } from "@/constants/color";
import { HomeScreen } from "./Home";
import { SettingScreen } from "./Setting";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: tabActiveColor,
          tabBarInactiveTintColor: tabInactiveColor,
          headerTitleAlign: "center",
        }}
      >
        <Tab.Screen
          name="ホーム"
          component={HomeScreen}
          options={{ tabBarIcon: ({ color }) => <IconHome color={color} /> }}
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
