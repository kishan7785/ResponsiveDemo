import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import ListData from "../components/datalistner/list-data";

import { Temp_Data } from "../../constants/temp-Data";
import CommonFlatList from "../components/flat-listner";
export default function TalukaScreen() {
  const [arrTaluka, setArrTaluka] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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
        // console.log("temp_object", temp_object);
      });
    });
    setArrTaluka(data);
  }
  // console.log("arrTaluka:", arrTaluka);

  function renderItem({ item, index }) {
    // console.log("itemData:", itemData);
    return <ListData item={item} index={index} />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <CommonFlatList data={arrTaluka} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}

/**
 * Screen Folder -> index.js style.js
 * Component Folder -> my-custom-header -> my-custom-header.js -> MyCustomeader
 */
