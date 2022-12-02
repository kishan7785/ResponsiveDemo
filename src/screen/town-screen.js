import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import Svg, { Path, G } from "react-native-svg";
import { Temp_Data } from "../../constants/town_temp_data";
import TownList from "../../constants/town-list";
import { normalizeText } from "../../responsive-text";
export default function TownScreen() {
  const [arrTown, setArrTown] = useState([]);
  // console.log("arr:", arrTown);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // function fetchData() {
  //   let arr = [];
  //   Temp_Data.forEach((item, index) => {
  //     item?.Tdo_Taluka?.forEach((x, i) => {
  //       x?.Taluka_Town?.forEach((j, ix) => {
  //         arr.push(j);
  //       });
  //     });
  //   });
  //   // console.log('fetchData: arr: ',arr);
  //   setArrTown(arr);
  // }
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setArrTown(Temp_Data);
  }
  function renderItem(itemData) {
    // console.log("itemData:", itemData);
    return (
      <TownList
        Town_Name={itemData.item.Town_Name}
        Town_Projects={itemData.item.Town_Projects}
        Taluka_Name={itemData.item.Taluka_Name}
      />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      {/* <View style={{flex:1}}>
        <FlatList
          data={arrTown}
          renderItem={renderItem}
          keyExtractor={(itm, inx) => inx}
        />
      </View> */}
    </SafeAreaView>
  );
}
