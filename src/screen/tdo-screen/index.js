import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { scale } from "react-native-size-matters";
import { normalizeText } from "../../../responsive-text";
import React, { useEffect, useState } from "react";
import AntIcon from "react-native-vector-icons/AntDesign";
// DummyData
import { Temp_Data } from "../../../constants/temp-Data";
// component
import ListData from "../../components/list-data/list-data";
import CommonFlatList from "../../components/flat-listner";
import { GlobalStyles } from "../../../constants/constColors";
import Search from "../../components/search/search";
import styles from "./styles";
import {
  itemSelection,
  tdoArrData,
  total_project,
  total_taluka,
  total_tdo,
  total_town,
} from "../../../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
export default function TdoScreen() {
  // Hooks
  const MainData = useSelector((state) => state.mainReducer.TdoArrData);
  const TempStoredItem = useSelector((state) => state.mainReducer.Items);

  console.log("tdo_screen: useSelector :TempStoredItem", TempStoredItem);
  const dispatch = useDispatch();
  // Local-state
  const [searchlabel, setSearchLabel] = useState(false);
  const [search, setSearch] = useState("");
  const [masterData, setMasterData] = useState([]);
  const [arrData, setArrayData] = useState([]);
  const [lableName, setLableName] = useState();

  // const [arrData, setArrayData] = useState([]);
  // console.log("arrData", arrData);
  useEffect(() => {
    if (TempStoredItem.length == 0) {
      console.log(searchlabel);
    } else {
      setSearchLabel(true);
      console.log(searchlabel);
      setLableName(TempStoredItem);
      const newData = Temp_Data.filter((item) => {
        return item.Tdo_Name == TempStoredItem;
      });
      // console.log("newData:", newData);

      const final_data = newData.map((item, index) => {
        let counter = 0;
        let talukaCounter = 0;
        let townCount = 0;
        const { Tdo_Name = "", Tdo_Image = "", Tdo_Taluka = [] } = item || {};
        talukaCounter = talukaCounter = item.Tdo_Taluka.length;
        Tdo_Taluka.forEach((x) => {
          townCount = townCount + x.Taluka_Town.length;
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
          lable_one: Tdo_Taluka[0]?.Taluka_Name
            ? Tdo_Taluka[0]?.Taluka_Name
            : "",
          lable_two: Tdo_Taluka[1]?.Taluka_Name
            ? Tdo_Taluka[1]?.Taluka_Name
            : "",
          count: counter,
          Key: "tdo-screen",
          talukaCounter: talukaCounter,
          townCount: townCount,
        };
        return temp_object;
      });
      Promise.all(final_data).then((response) => {
        // console.log("response.length", response.length);
        // console.log("response:", response);
        // console.log('response.length',response.length);
        dispatch(tdoArrData(response));
        dispatch(total_tdo(response.length));
        dispatch(total_taluka(response[0].talukaCounter));
        dispatch(total_town(response[0].townCount));
        dispatch(total_project(response[0].count));
      });
      // console.log("final_data:", final_data);
    }
  }, [TempStoredItem]);

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
  function cancleSelectionPressHandler() {
    setSearchLabel(false);
    dispatch(itemSelection(""));
    fetchData();
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
  // console.log("log2:", searchlabel);
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Search
        search={search}
        onChangeText={(text) => searchFilterFunction(text)}
      />
      {searchlabel ? (
        <Pressable onPress={cancleSelectionPressHandler}>
          <View
            style={{
              width: "100%",
              height: scale(40),
              // backgroundColor: "#ccc",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: scale(20),
            }}
          >
            <View
              style={{
                backgroundColor: "#FEF7E5",
                // justifyContent: "center",
                borderRadius: scale(5),
                padding: scale(5),
                marginRight: scale(8),
                // paddingEnd: scale(25),
                height: scale(20),
                alignItems: "center",
                elevation: 3,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: normalizeText(9),
                  color: "black",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {lableName}
                {"    "}
              </Text>
              <AntIcon name="close" size={normalizeText(9)} color="black" />
            </View>
          </View>
        </Pressable>
      ) : null}
      <CommonFlatList data={arrData} />
    </SafeAreaView>
  );
}
