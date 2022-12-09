import react from "react";
import { FlatList, View, Text } from "react-native";
import ListData from "./list-data/list-data";
const CommonFlatList = ({ data }) => {
  function renderItem({ item, index }) {
    return <ListData item={item} index={index} />;
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
