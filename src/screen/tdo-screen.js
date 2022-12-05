import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { scale } from "react-native-size-matters";
import Svg, { Path, G } from "react-native-svg";
import { GlobalStyles } from "../../constants/constColors";
import { normalizeText } from "../../responsive-text";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import ListData from "../../constants/tdo-list";
import { Temp_Data } from "../../constants/temp-Data";
import { useEffect, useState } from "react";
export default function TdoScreen() {
  const [arrData, setArrayData] = useState([]);

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
      console.log("profile:", temp_object.profile);
      return temp_object;
    });

    Promise.all(final_data).then((response) => {
      setArrayData(response);
    });
  }
  function renderItem({ item, index }) {
    return <ListData item={item} index={index} />;
  }

  // function getLength() {
  //   let counter = 0;
  //   Temp_Data.forEach((item) => {
  //     item.Tdo_Taluka.forEach((x) => {
  //       x.Taluka_Town.forEach((i) => {
  //         console.log(
  //           "i.Town_Projects.length",
  //           item.Tdo_Name,
  //           i.Town_Projects.length
  //         );
  //         counter = counter + i.Town_Projects.length;
  //       });
  //     });
  //   });
  //   return counter;
  // }
  // console.log("ArrData:", arrData);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={arrData}
        renderItem={renderItem}
        keyExtractor={(itm, inx) => String(inx)}
      />
    </SafeAreaView>
  );
}
