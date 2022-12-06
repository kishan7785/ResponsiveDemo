import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import { scale } from "react-native-size-matters";
import Svg, { Path, G } from "react-native-svg";
import { normalizeText } from "../../responsive-text";
import { Temp_Data } from "../../constants/temp-Data";
import ListData from "../components/datalistner/list-data";
import CommonFlatList from "../components/flat-listner";
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
    let data = [];
    Temp_Data.forEach((item, index) => {
      item?.Tdo_Taluka.forEach((x, i) => {
        const { Taluka_Name = "" } = x || {};

        x?.Taluka_Town.forEach((j, inx) => {
          let counter = 0;
          counter = counter + j.Town_Projects.length;
          const { Town_Name = "" } = j || {};

          const Initial = Town_Name.split(" ");
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
            profile: Temp,
            title: Town_Name,
            lable_one: Taluka_Name,
            count: counter,
            key: "Town-screen",
          };
          data.push(temp_object);
        });

        // console.log("counter:", counter);

        // console.log("temp_object", temp_object);
      });
    });
    setArrTown(data);
  }
  function renderItem({ item, index }) {
    // console.log("itemData:", itemData);
    return <ListData item={item} index={index} />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CommonFlatList data={arrTown} renderItem={renderItem} />
    </SafeAreaView>
  );
}
