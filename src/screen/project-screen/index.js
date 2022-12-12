import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { scale } from "react-native-size-matters";
import AntIcon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { Temp_Data } from "../../../constants/temp-Data";
import {
  itemSelection,
  projectArrData,
  total_project,
  total_town,
  townArrData,
} from "../../../Redux/Action";
import { normalizeText } from "../../../responsive-text";
import CommonFlatList from "../../components/flat-listner";
import ListData from "../../components/list-data/list-data";
import Search from "../../components/search/search";
import { styles } from "./styles";
export default function ProjectScreen() {
  const [arrProject, setArrProject] = useState([]);
  const [search, setSearch] = useState("");
  const [masterData, setMasterData] = useState([]);
  const [searchlabel, setSearchLabel] = useState(false);
  const [lableName, setLableName] = useState();
  // Hooks
  const dispatch = useDispatch();
  const MainData = useSelector((state) => state.mainReducer.ProjectArrData);
  const TempStoredItem = useSelector((state) => state.mainReducer.Items);

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
  }, [TempStoredItem]);

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
      dispatch(projectArrData(response));
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
      <CommonFlatList data={arrProject} />
    </SafeAreaView>
  );
}
