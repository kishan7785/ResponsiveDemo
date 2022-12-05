import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput, FlatList } from "react-native";
import { concat } from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import Svg, { Path, G } from "react-native-svg";
import TalukaList from "../../constants/taluka-list";
import ListData from "../../constants/tdo-list";
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
    const final_data = Temp_Data.map((item, index) => {
      let counter = 0;
      let townCounter = 0;
      const { Tdo_Name = "", Tdo_Image = "", Tdo_Taluka = [] } = item || {};

      Tdo_Taluka.forEach((x) => {
        x.Taluka_Town.forEach((j) => {
          counter = counter + j.Town_Projects.length;
        });
      });
      Tdo_Taluka.forEach((x) => {
        townCounter = townCounter + x.Taluka_Town.length;
      });

      const Initial = Tdo_Taluka[0].Taluka_Name.split(" ");
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
        title: Tdo_Taluka[0]?.Taluka_Name ? Tdo_Taluka[0]?.Taluka_Name : "",
        lable_one: townCounter,
        lable_two: Tdo_Name ? Tdo_Name : "",
        count: counter,
        Key: "taluka_screen",
      };
      return temp_object;
    });

    Promise.all(final_data).then((response) => {
      console.log("responce:", response);
      setArrayData(response);
    });
  }
  // console.log("arrTaluka:", arrTaluka);

  function renderItem({ item, index }) {
    // console.log("itemData:", itemData);
    return <ListData item={item} index={index} />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* <FlatList
          data={arrTaluka}
          keyExtractor={(itm, inx) => String(inx)}
          renderItem={renderItem}
        /> */}
      </View>
    </SafeAreaView>
  );
}
