import React from "react";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
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
import {
  itemSelection,
  talukaArrData,
  total_taluka,
  total_town,
  townArrData,
} from "../../../Redux/Action";
export default function TownScreen() {
  const [search, setSearch] = useState("");
  const [arrTown, setArrTown] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [searchlabel, setSearchLabel] = useState(false);
  const [lableName, setLableName] = useState();
  // Hooks
  const MainData = useSelector((state) => state.mainReducer.TownArrData);
  const TempStoredItem = useSelector((state) => state.mainReducer.Items);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // fetchData();
  // }, []);
  useEffect(() => {
    if (TempStoredItem.length == 0) {
      // console.log(searchlabel);
    } else {
      setSearchLabel(true);
      // console.log(searchlabel);
      setLableName(TempStoredItem);
     
    }
  }, [TempStoredItem]);

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
      dispatch(townArrData(response));
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
  function cancleSelectionPressHandler() {
    setSearchLabel(false);
    dispatch(itemSelection(""));
    fetchData();
  }
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
      <CommonFlatList data={arrTown} />
    </SafeAreaView>
  );
}
