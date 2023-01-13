import React, { useEffect, useState } from "react";
import MainHeader from "../components/main-header";
import { GlobalStyles } from "../../constants/constColors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { scale } from "react-native-size-matters";
import { Dimensions } from "react-native";
import { normalizeText } from "../../responsive-text";
import { useSelector, useDispatch } from "react-redux";
import { Temp_Data } from "../../constants/temp-Data";
//Screen
import TdoScreen from "./tdo-screen";
import TalukaScreen from "./taluka-screen";
import TownScreen from "./town-screen";
import ProjectScreen from "./project-screen";
import {
  tdoArrData,
  townArrData,
  talukaArrData,
  projectArrData,
  total_taluka,
  total_tdo,
  total_town,
  total_project,
} from "../../Redux/Action";
import CommonFlatList from "../components/flat-listner";
import ProjectDetailScreen from "./project-detail";
export default function Routes() {
  const Stack = createNativeStackNavigator();
  const TopTab = createMaterialTopTabNavigator();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTdoData();
    fetchTalukaData();
    fetchTownData();
    fetchProjectData();
  }, []);
  function fetchTdoData() {
    const final_data = Temp_Data.map((item, index) => {
      let counter = 0;
      const { Tdo_Name = "", Tdo_Image = "", Tdo_Taluka = [] } = item || {};

      Tdo_Taluka.forEach((x) => {
        x.Taluka_Town.forEach((j) => {
          counter = counter + j.Town_Projects.length;
        });
      });
      const Initial = Tdo_Name.split(" ");
      if (Initial.length > 1) {
        var Temp =
          Initial[0].charAt(0).toUpperCase() +
          Initial[1].charAt(0).toUpperCase();
      } else {
        var Temp =
          Initial[0].charAt(0).toUpperCase() +
          Initial[0].charAt(Initial[0].length / 2).toUpperCase();
      }
      // console.log("counter", counter, index);

      const temp_object = {
        profile: Tdo_Image == null ? Temp : "",
        title: Tdo_Name,
        lable_one: Tdo_Taluka[0]?.Taluka_Name ? Tdo_Taluka[0]?.Taluka_Name : "",
        lable_two: Tdo_Taluka[1]?.Taluka_Name ? Tdo_Taluka[1]?.Taluka_Name : "",
        count: counter,
        Key: "tdo-screen",
      };

      return temp_object;
    });

    Promise.all(final_data).then((response) => {
      // console.log("response.length", response.length);
      dispatch(tdoArrData(response));
      dispatch(total_tdo(response.length));
    });
  }
  function fetchTalukaData() {
    let data = [];
    Temp_Data.forEach((item, index) => {
      const { Tdo_Name = "", Tdo_Image = "" } = item || {};

      item?.Tdo_Taluka.forEach((x, i) => {
        let towncounter = 0;
        let counter = 0;
        const { Taluka_Name = "", Taluka_Town = [] } = x || {};
        // console.log("TalukaTown:", Taluka_Name);
        towncounter = towncounter + x.Taluka_Town.length;

        x?.Taluka_Town.forEach((j, inx) => {
          counter = counter + j.Town_Projects.length;
        });

        // console.log("counter:", counter);
        const Initial = Taluka_Name.split(" ");
        if (Initial.length > 1) {
          var Temp =
            Initial[0].charAt(0).toUpperCase() +
            Initial[1].charAt(0).toUpperCase();
        } else {
          var Temp =
            Initial[0].charAt(0).toUpperCase() +
            Initial[0].charAt(Initial[0].length / 2).toUpperCase();
        }
        const temp_object = {
          profile: Tdo_Image == null ? Temp : "",
          title: Taluka_Name,
          lable_one: towncounter,
          lable_two: Tdo_Name,
          count: counter,
          key: "Taluka-screen",
        };
        data.push(temp_object);
      });
    });
    Promise.all(data).then((response) => {
      dispatch(talukaArrData(response));
      dispatch(total_taluka(data.length));
    });
  }
  function fetchTownData() {
    let data = [];
    Temp_Data.forEach((item, index) => {
      item?.Tdo_Taluka.forEach((x, i) => {
        const { Taluka_Name = "" } = x || {};

        x?.Taluka_Town.forEach((j, inx) => {
          let counter = 0;
          counter = counter + j.Town_Projects.length;
          const { Town_Name = "" } = j || {};

          const Initial = Town_Name.split(" ");
          if (Initial.length > 1) {
            var Temp =
              Initial[0].charAt(0).toUpperCase() +
              Initial[1].charAt(0).toUpperCase();
          } else {
            var Temp =
              Initial[0].charAt(0).toUpperCase() +
              Initial[0].charAt(Initial[0].length / 2).toUpperCase();
          }
          const temp_object = {
            profile: Temp,
            title: Town_Name,
            lable_one: Taluka_Name,
            count: counter,
            key: "Town-screen",
          };
          data.push(temp_object);
        });

        // console.log("counter:", counter);

        // console.log("temp_object", temp_object);
      });
    });
    Promise.all(data).then((response) => {
      dispatch(townArrData(response));
      dispatch(total_town(data.length));
    });
  }
  function fetchProjectData() {
    let data = [];
    Temp_Data.forEach((item, index) => {
      item?.Tdo_Taluka.forEach((x, i) => {
        const { Taluka_Name = "" } = x || {};

        x?.Taluka_Town.forEach((j, inx) => {
          const { Town_Name = "" } = j || {};
          j.Town_Projects.forEach((h) => {
            const {
              Project_Due_Date = "",
              Project_Name = "",
              Project_Status_Value = "",
            } = h || {};
            const combine = Town_Name + ", " + Taluka_Name;
            const temp_object = {
              profile: Project_Status_Value,
              title: Project_Name,
              lable_one: combine,
              lable_two: Project_Due_Date,

              key: "Project-screen",
            };
            data.push(temp_object);
          });
        });
      });
    });
    Promise.all(data).then((response) => {
      dispatch(projectArrData(response));
      dispatch(total_project(data.length));
    });
  }

  function TopTabScreen() {
    const { height } = Dimensions.get("window");
    const total_tdo = useSelector(
      (state) => state.mainReducer.TotalTdoCount || 0
    );
    // console.log("total_tdo", total_tdo);
    const total_taluka = useSelector(
      (state) => state.mainReducer.TotalTalukaCount || 0
    );
    const total_town = useSelector(
      (state) => state.mainReducer.TotalTownCount || 0
    );
    const total_project = useSelector(
      (state) => state.mainReducer.TotalProjectCount || 0
    );
    // console.log("Tproject in store:", total_project);
    return (
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: height < 684 ? normalizeText(10.5) : normalizeText(11.5),
            fontWeight: "bold",
            color: "white",
            elevation: 10,
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
        <Stack.Screen name="commonFlatlist" component={CommonFlatList} />
        <Stack.Screen
          name="projectDetailScreen"
          component={ProjectDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
