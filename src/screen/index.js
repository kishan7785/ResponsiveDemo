import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import MainHeader from '../../constants/main-header';
import {GlobalStyles} from '../../constants/constColors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {scale} from 'react-native-size-matters';

//Screen
import TdoScreen from './tdo-screen';
import TalukaScreen from './taluka-screen';
import TownScreen from './town-screen';
import ProjectScreen from './project-screen';
import {normalizeText} from '../../responsive-text';

export default function Routes() {
  const Stack = createNativeStackNavigator();
  const TopTab = createMaterialTopTabNavigator();

  function TopTabScreen() {
    return (
      <TopTab.Navigator
        screenOptions={{
          //   tabBarItemStyle: {width: 100},
          tabBarLabelStyle: {fontSize: normalizeText(12)},
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.mainC,
          },
        }}>
        <TopTab.Screen name={'Tab-Tdo'} component={TdoScreen} />
        <TopTab.Screen name={'Tab-Taluka'} component={TalukaScreen} />
        <TopTab.Screen name={'Tab-Town'} component={TownScreen} />
        <TopTab.Screen name={'Tab-Projects'} component={ProjectScreen} />
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
        }}>
        {/* <Stack.Screen name="Header" component={MainHeader} /> */}
        <Stack.Screen name="Stack-Tdo" component={TdoScreen} />
        <Stack.Screen name="Stack-Taluka" component={TalukaScreen} />
        <Stack.Screen name="Stack-Town" component={TownScreen} />
        <Stack.Screen name="Stack-Projects" component={ProjectScreen} />
        <Stack.Screen name="TopBarTab" component={TopTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
