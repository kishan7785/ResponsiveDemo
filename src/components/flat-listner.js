import react from "react";
import {
  FlatList,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { sortDataforTdo } from "../../Redux/Action";
import ListData from "./list-data/list-data";
const CommonFlatList = ({ data, navigation }) => {
  // console.log("navigation:", navigation);
  // console.log("data:", data);
  const dispatch = useDispatch();

  function renderItem({ item, index }) {
    function presshandler() {
      if (item.key == "Project-screen") {
        // console.log("navigation worked");
        navigation.navigate("projectDetailScreen", { item: item, index: "-1" });
      } else if (item.key == "Town-screen" || item.key == "Taluka-screen") {
        console.log("Do nothing for ", item.key);
      } else {
        dispatch(sortDataforTdo(item.title));
      }
    }

    return <ListData item={item} index={index} onPress={presshandler} />;
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(itm, inx) => String(inx)}
    />
  );
};
export default CommonFlatList;
