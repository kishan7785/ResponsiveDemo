import React from "react";
import { useEffect, useState } from "react";
import { scale } from "react-native-size-matters";
import AntIcon from "react-native-vector-icons/AntDesign";
import { normalizeText } from "../../../responsive-text";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import ListData from "../../components/list-data/list-data";
import { useDispatch, useSelector } from "react-redux";
import { Temp_Data } from "../../../constants/temp-Data";
import CommonFlatList from "../../components/flat-listner";
import { styles } from "./styles";
import Search from "../../components/search/search";
import { useFocusEffect } from "@react-navigation/native";
import {
  itemSelection,
  talukaArrData,
  total_taluka,
} from "../../../Redux/Action";
export default function TalukaScreen() {
  const [arrTaluka, setArrTaluka] = useState([]);
  const [search, setSearch] = useState("");
  const [masterData, setMasterData] = useState([]);
  const [searchlabel, setSearchLabel] = useState(false);
  const [lableName, setLableName] = useState();

  //hooks
  const MainData = useSelector((state) => state.mainReducer.TalukaArrData);
  const TempStoredItem = useSelector((state) => state.mainReducer.Items);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   // fetchData();
  //   setArrTaluka(MainData);
  //   setMasterData(MainData);
  // }, [MainData]);
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

      let data = [];
      newData.forEach((item, index) => {
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
  }, [TempStoredItem]);
  useFocusEffect(
    React.useCallback(() => {
      setArrTaluka(MainData);
      setMasterData(MainData);
      // fetchData();
    }, [MainData])
  );

  function fetchData() {
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
  // console.log("arrTaluka:", arrTaluka);
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
      setArrTaluka(newData);
      setSearch(text);
    } else {
      setArrTaluka(masterData);
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
      <CommonFlatList data={arrTaluka} />
    </SafeAreaView>
  );
}

/**
 * Screen Folder -> index.js style.js
 * Component Folder -> my-custom-header -> my-custom-header.js -> MyCustomeader
 */
