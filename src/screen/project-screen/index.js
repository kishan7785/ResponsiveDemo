import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import AntIcon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { Temp_Data } from "../../../constants/temp-Data";
import { total_project } from "../../../Redux/Action";
import { normalizeText } from "../../../responsive-text";
import CommonFlatList from "../../components/flat-listner";
import ListData from "../../components/list-data/list-data";
import Search from "../../components/search/search";
import { styles } from "./styles";
export default function ProjectScreen() {
  const [arrProject, setArrProject] = useState([]);
  const [search, setSearch] = useState("");
  const [masterData, setMasterData] = useState([]);
  // Hooks
  const MainData = useSelector((state) => state.mainReducer.ProjectArrData);

  // useEffect(() => {

  //   // fetchData();
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      setArrProject(MainData);
      setMasterData(MainData);
      // fetchData();
    }, [MainData])
  );

  function fetchData() {
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
      setArrProject(response);
      setMasterData(response);
      dispatch(total_project(data.length));
    });
  }
  // console.log("arrProject:", arrProject);
  function searchFilterFunction(text) {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log("newData", newData);
      setArrProject(newData);
      setSearch(text);
    } else {
      setArrProject(masterData);
      setSearch(text);
    }
  }
  // function renderItem({ item, index }) {
  //   return <ListData item={item} index={index} />;
  // }

  return (
    <SafeAreaView style={styles.maincontainer}>
      <Search
        search={search}
        onChangeText={(text) => searchFilterFunction(text)}
      />
      <CommonFlatList data={arrProject} />
    </SafeAreaView>
  );
}
