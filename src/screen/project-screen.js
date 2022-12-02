import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import Svg, { Path, G } from "react-native-svg";
import ProjectList from "../../constants/project-list";
import { Temp_Data } from "../../constants/project_temp_data";
import { normalizeText } from "../../responsive-text";
export default function ProjectScreen() {
  const [arrProject, setArrProject] = useState([]);
  // console.log("arr:", arrTown);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // function fetchData() {
  //   let arr = [];
  //   Temp_Data.forEach((item, index) => {
  //     item?.Tdo_Taluka?.forEach((x, i) => {
  //       x?.Taluka_Town?.forEach((j, ix) => {
  //         j?.Town_Projects?.forEach((k) => {
  //           arr.push(k);
  //         });
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
    
    
  }
  function renderItem(itemData) {
    // console.log("itemData:", itemData);
    return (
      <ProjectList
        Project_Name={itemData.item.Project_Name}
        Project_Due_Date={itemData.item.Project_Due_Date}
        Project_Status_Value={itemData.item.Project_Status_Value}
        Town_Name={itemData.item.Town_Name}
        Taluka_Name={itemData.item.Taluka_Name}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      {/* <View style={{ flex: 1 }}>
        <FlatList
          data={arrProject}
          renderItem={renderItem}
          keyExtractor={(itm, inx) => inx}
        />
      </View> */}
    </SafeAreaView>
  );
}
