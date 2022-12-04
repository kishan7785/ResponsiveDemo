import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput, FlatList } from "react-native";
import { concat } from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import Svg, { Path, G } from "react-native-svg";
import TalukaList from "../../constants/taluka-list";
import { Temp_Data } from "../../constants/temp-Data";
import { normalizeText } from "../../responsive-text";
export default function TalukaScreen() {
  const [arrTaluka, setArrTaluka] = useState([]);
  // console.log("arrTaluka:", arrTaluka);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // function fetchData() {
  //   let arr = [];
  //   Temp_Data.forEach((item, index) => {
  //     item?.Tdo_Taluka?.forEach((x, i) => {
  //       arr.push(x);
  //     });
  //   });
  //   // console.log('fetchData: arr: ',arr);
  //   setArrTaluka(arr);
  // }

  // console.log("reuslt:", result);
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    // 1 Temp_Data
    // 2 data as per tab
    // 3 combined all data in on Object
    // 4 push above
    // 5 Local variable no global
    let data = [];
    Temp_Data.forEach((item) => {
      item?.Tdo_Taluka?.forEach((x) => {
        // data[0].finalData.push(x),
        //   data[0].finalData[0].Name.push(item.Tdo_Name);
        // arr.push(item.Tdo_Name), arr.push(x);
        // let final = concat(arr);
        data.push({
          name: item.Tdo_Name,
          data: x,
        });
      });
    });
    setArrTaluka(data);
  }
  console.log("arrTaluka:", arrTaluka);

  function renderItem(itemData) {
    // console.log("itemData:", itemData);
    return (
      <TalukaList
        Taluka_Name={itemData.item.data.Taluka_Name}
        Taluka_Town={itemData.item.data.Taluka_Town}
        Tdo_Name={itemData.item.name}
      />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={arrTaluka}
          keyExtractor={(itm, inx) => String(inx)}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}
