import { registerRootComponent } from "expo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { IconHome } from "@/components/icons/IconHome";
import { IconSetting } from "@/components/icons/IconSetting";
import { HomeScreen } from "./Home";
import { SettingScreen } from "./Setting";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: IconHome }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{ tabBarIcon: IconSetting }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);
