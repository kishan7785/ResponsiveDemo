import { SafeAreaView, View, TextInput, Text, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { normalizeText } from "../../../responsive-text";
import React, { useEffect, useState } from "react";
// DummyData
import { Temp_Data } from "../../../constants/temp-Data";
// component
import ListData from "../../components/list-data/list-data";
import CommonFlatList from "../../components/flat-listner";
import { GlobalStyles } from "../../../constants/constColors";
import Search from "../../components/search/search";
import styles from "./styles";
import { total_tdo } from "../../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
export default function TdoScreen() {
  // Hooks
  const MainData = useSelector((state) => state.mainReducer.TdoArrData);
  const TempStoredItem = useSelector((state) => state.mainReducer.Items);
  // console.log("tdo_screen: useSelector :TempStoredItem", TempStoredItem);
  // const dispatch = useDispatch();
  // Local-state
  const [search, setSearch] = useState("");
  const [masterData, setMasterData] = useState([]);
  const [arrData, setArrayData] = useState([]);

  // const [arrData, setArrayData] = useState([]);
  // console.log("arrData", arrData);
  // useEffect(() => {
  //   // fetchData();
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      setArrayData(MainData);
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
    // const final_data = Temp_Data.map((item, index) => {
    //   let counter = 0;
    //   const { Tdo_Name = "", Tdo_Image = "", Tdo_Taluka = [] } = item || {};
    //   Tdo_Taluka.forEach((x) => {
    //     x.Taluka_Town.forEach((j) => {
    //       counter = counter + j.Town_Projects.length;
    //     });
    //   });
    //   const Initial = Tdo_Name.split(" ");
    //   if (Initial.length > 1) {
    //     var Temp =
    //       Initial[0].charAt(0).toUpperCase() +
    //       Initial[1].charAt(0).toUpperCase();
    //   } else {
    //     var Temp =
    //       Initial[0].charAt(0).toUpperCase() +
    //       Initial[0].charAt(Initial[0].length / 2).toUpperCase();
    //   }
    //   // console.log("counter", counter, index);
    //   const temp_object = {
    //     profile: Tdo_Image == null ? Temp : "",
    //     title: Tdo_Name,
    //     lable_one: Tdo_Taluka[0]?.Taluka_Name ? Tdo_Taluka[0]?.Taluka_Name : "",
    //     lable_two: Tdo_Taluka[1]?.Taluka_Name ? Tdo_Taluka[1]?.Taluka_Name : "",
    //     count: counter,
    //     Key: "tdo-screen",
    //   };
    //   return temp_object;
    // });
    // Promise.all(final_data).then((response) => {
    //   // console.log("response.length", response.length);
    //   // console.log("response:", response);
    //   setArrayData(response);
    //   setMasterData(response);
    //   // console.log('response.length',response.length);
    //   // dispatch(total_tdo(response.length));
    // });
    setArrayData(MainData);
    setMasterData(MainData);
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
      // console.log('newData',newData);
      setArrayData(newData);
      setSearch(text);
    } else {
      setArrayData(masterData);
      setSearch(text);
    }
  }

  // console.log("arrData:", arrData);
  function renderItem({ item, index }) {
    return <ListData item={item} index={index} />;
  }
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Search
        search={search}
        onChangeText={(text) => searchFilterFunction(text)}
      />
      <View
        style={{ width: "100%", height: scale(30), backgroundColor: "#ccc" }}
      >
        <Text></Text>
      </View>
      <CommonFlatList data={arrData} />
    </SafeAreaView>
  );
}
