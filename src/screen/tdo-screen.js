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
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: scale(1),
          borderBottomColor: "#ccc",
          width: "89%",
          alignItems: "center",
          marginTop: scale(20),
          marginHorizontal: scale(20),
        }}
      >
        <Svg
          width={scale(16)}
          height={scale(16)}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M7.66668 14C11.1645 14 14 11.1645 14 7.66668C14 4.16887 11.1645 1.33334 7.66668 1.33334C4.16887 1.33334 1.33334 4.16887 1.33334 7.66668C1.33334 11.1645 4.16887 14 7.66668 14Z"
            stroke="#AEAEAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M14.6667 14.6667L13.3333 13.3333"
            stroke="#AEAEAE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
        <TextInput
          placeholder="Search"
          style={{
            fontSize: normalizeText(16),
            marginHorizontal: scale(3),
            overflow: "hidden",
            maxWidth: "90%",
          }}
        />
      </View>
      <FlatList
        data={arrData}
        renderItem={renderItem}
        keyExtractor={(itm,inx) => String(inx)}
      />
    </SafeAreaView>
  );
}
