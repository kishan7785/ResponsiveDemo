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
import { GET, POST, trail_urls } from "../../service/api";
export default function TdoScreen() {
  // Hooks
  const MainData = useSelector((state) => state.mainReducer.TdoArrData);
  const TempStoredItem = useSelector((state) => state.mainReducer.Items);

  // console.log("tdo_screen: useSelector :TempStoredItem", TempStoredItem);
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
    } else {
      setSearchLabel(true);
      setLableName(TempStoredItem);
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

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  async function fetchDataFromServer() {
    // const body = new FormData();
    // body.append("name", "Good one-II");
    // body.append("location", "Baroda");
    // body.append("ball_type", "red");
    // body.append("about", "This is about team 6");

    // // Raw data
    // const raw_body = {
    //   key1: "value1",
    //   key2: "value2",
    // };

    // const res = await POST("TDO_RESPONCE_ERROR");
    // const res = await GET(trail_urls.getlist, "TDO_RESPONSE_ERROR");
    // console.log("Api Response TDO", res);



    // console.log("res:", res.data);
    // setLoading(false)z
  }

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
