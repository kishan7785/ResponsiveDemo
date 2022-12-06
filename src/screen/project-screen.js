import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import Svg, { Path, G } from "react-native-svg";
import { Temp_Data } from "../../constants/temp-Data";
import { normalizeText } from "../../responsive-text";
import CommonFlatList from "../components/flat-listner";
import ListData from "../components/datalistner/list-data";
export default function ProjectScreen() {
  const [arrProject, setArrProject] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    let data = [];
    Temp_Data.forEach((item, index) => {
      item?.Tdo_Taluka.forEach((x, i) => {
        const { Taluka_Name = "" } = x || {};

        x?.Taluka_Town.forEach((j, inx) => {
          const { Town_Name = "" } = j || {};
          j.Town_Projects.forEach((h) => {
            const {
              Project_Due_Date = "",
              Project_Name = "",
              Project_Status_Value = "",
            } = h || {};
            const combine = Town_Name + ", " + Taluka_Name;
            const temp_object = {
              profile: Project_Status_Value,
              title: Project_Name,
              lable_one: combine,
              lable_two: Project_Due_Date,

              key: "Project-screen",
            };
            data.push(temp_object);
          });
        });
      });
    });
    setArrProject(data);
  }
  // console.log("arrProject:", arrProject);
  function renderItem({ item, index }) {
    return <ListData item={item} index={index} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CommonFlatList data={arrProject} renderItem={renderItem} />
    </SafeAreaView>
  );
}
