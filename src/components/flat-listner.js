import react from "react";
import { FlatList, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { sortDataforTdo } from "../../Redux/Action";
import ListData from "./list-data/list-data";
const CommonFlatList = ({ data }) => {
  const dispatch = useDispatch();
  function renderItem({ item, index }) {
    return (
      <ListData
        item={item}
        index={index}
        onPress={() => {
          dispatch(sortDataforTdo(item.title));
        }}
      />
    );
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
