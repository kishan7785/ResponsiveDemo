import React from "react";
import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput, StyleSheet } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import { scale } from "react-native-size-matters";
import { normalizeText } from "../../../responsive-text";
import { Temp_Data } from "../../../constants/temp-Data";
import ListData from "../../components/list-data/list-data";
import CommonFlatList from "../../components/flat-listner";
import Search from "../../components/search/search";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";
export default function TownScreen() {
  const [search, setSearch] = useState("");
  const [arrTown, setArrTown] = useState([]);
  const [masterData, setMasterData] = useState([]);
  // Hooks
  const MainData = useSelector((state) => state.mainReducer.TownArrData);
  // useEffect(() => {
  //   // fetchData();
  // }, []);
  useFocusEffect(
    React.useCallback(() => {
      setArrTown(MainData);
      setMasterData(MainData);
      // fetchData();
    }, [MainData])
  );
  // useFocusEffect(
  //   React.useCallback(() => {
  //     fetchData();
  //   }, [])
  // );

  function fetchData() {
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
      setArrTown(response);
      setMasterData(response);
      dispatch(total_town(data.length));
    });
  }
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
      setArrTown(newData);
      setSearch(text);
    } else {
      setArrTown(masterData);
      setSearch(text);
    }
  }
  // function renderItem({ item, index }) {
  //   // console.log("itemData:", itemData);
  //   return <ListData item={item} index={index} />;
  // }
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Search
        search={search}
        onChangeText={(text) => searchFilterFunction(text)}
      />
      <CommonFlatList data={arrTown} />
    </SafeAreaView>
  );
}
