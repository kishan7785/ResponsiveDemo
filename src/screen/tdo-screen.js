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
    setArrayData(Temp_Data);
  }
  function renderItem(itemData) {
    return (
      <ListData
        Tdo_Name={itemData.item.Tdo_Name}
        Tdo_Taluka={itemData.item.Tdo_Taluka}
        Town_Projects={itemData.item.Town_Projects}
      />
    );
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      <FlatList
        data={arrData}
        renderItem={renderItem}
        keyExtractor={(itm,inx) => String(inx)}
      />
    </SafeAreaView>
  );
}
