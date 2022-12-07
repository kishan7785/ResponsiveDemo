import { SafeAreaView, View, TextInput, Text, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { normalizeText } from "../../../responsive-text";
import { useEffect, useState } from "react";
// DummyData
import { Temp_Data } from "../../../constants/temp-Data";
// component
import ListData from "../../components/list-data/list-data";
import CommonFlatList from "../../components/flat-listner";
import { GlobalStyles } from "../../../constants/constColors";
import Search from "../../components/search/search";
import styles from "./styles";
import { total_tdo } from "../../../Redux/Action";
import { useDispatch } from "react-redux";
export default function TdoScreen() {
  const [search, setSearch] = useState("");
  const [masterData, setMasterData] = useState([]);
  const [arrData, setArrayData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

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
      setArrayData(response);
      setMasterData(response);
      dispatch(total_tdo(final_data.length));
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
      // console.log('newData',newData);
      setArrayData(newData);
      setSearch(text);
    } else {
      setArrayData(masterData);
      setSearch(text);
    }
  }

  function renderItem({ item, index }) {
    return <ListData item={item} index={index} />;
  }

  return (
    <SafeAreaView style={styles.maincontainer}>
      <Search
        search={search}
        onChangeText={(text) => searchFilterFunction(text)}
      />
      <CommonFlatList data={arrData} renderItem={renderItem} />
    </SafeAreaView>
  );
}
