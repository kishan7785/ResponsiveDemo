import React, { useEffect, useState } from "react";
import MainHeader from "../components/main-header";
import { GlobalStyles } from "../../constants/constColors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { scale } from "react-native-size-matters";
import { useWindowDimensions } from "react-native";
import { Dimensions } from "react-native";
//Screen
import TdoScreen from "./tdo-screen";
import TalukaScreen from "./taluka-screen";
import TownScreen from "./town-screen";
import ProjectScreen from "./project-screen";
import { normalizeText } from "../../responsive-text";
import { useSelector } from "react-redux";
export default function Routes() {
  const { height } = Dimensions.get("window");
  const Stack = createNativeStackNavigator();
  const TopTab = createMaterialTopTabNavigator();

  // useEffect(() => {}, []);

  function TopTabScreen() {
    const total_tdo = useSelector((state) => state.mainReducer.T_tdo || 0);
    const total_taluka = useSelector(
      (state) => state.mainReducer.T_taluka || 0
    );
    const total_town = useSelector((state) => state.mainReducer.T_town || 0);
    const total_project = useSelector(
      (state) => state.mainReducer.T_project || 0
    );

    return (
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: normalizeText(10.5),
            fontWeight: "bold",
            color: "white",
            elevation: 10,
            textAlign: "center",
            alignItems: "center",
          },
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.mainC,
          },
          tabBarIndicatorStyle: {
            backgroundColor: "white",
            height: scale(5),
            borderTopLeftRadius: scale(4),
            borderTopRightRadius: scale(4),
            elevation: 10,
          },
        }}
      >
        <TopTab.Screen
          name={"Tab-Tdo"}
          component={TdoScreen}
          options={{
            title: `TDO ( ${total_tdo} )`,
          }}
        />
        <TopTab.Screen
          name={"Tab-Taluka"}
          component={TalukaScreen}
          options={{
            title: `Taluka( ${total_taluka} )`,
          }}
        />
        <TopTab.Screen
          name={"Tab-Town"}
          component={TownScreen}
          options={{
            title: `Town( ${total_town} )`,
          }}
        />
        <TopTab.Screen
          name={"Tab-Projects"}
          component={ProjectScreen}
          options={{
            title: `Project( ${total_project} )`,
            // tabBarLabelStyle: {
            //   fontSize: height < 684 ? scale(10) : scale(12),
            //   fontWeight: "bold",
            //   color: "white",
            // },
          }}
        />
      </TopTab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TopBarTab"
        screenOptions={{
          headerShown: true,
          header: () => <MainHeader />,
        }}
      >
        <Stack.Screen name="Header" component={MainHeader} />
        <Stack.Screen name="Stack-Tdo" component={TdoScreen} />
        <Stack.Screen name="Stack-Taluka" component={TalukaScreen} />
        <Stack.Screen name="Stack-Town" component={TownScreen} />
        <Stack.Screen name="Stack-Projects" component={ProjectScreen} />
        <Stack.Screen name="TopBarTab" component={TopTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
