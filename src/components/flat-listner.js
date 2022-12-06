import react from "react";
import { FlatList, View, Text } from "react-native";
const CommonFlatList = ({ data, renderItem }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(itm, inx) => String(inx)}
    />
  );
};
export default CommonFlatList;
