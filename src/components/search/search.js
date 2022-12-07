import { TextInput, View } from "react-native";
import { scale } from "react-native-size-matters";
import AntIcon from "react-native-vector-icons/AntDesign";
import { styles } from "./styles";
export default function Search({ search, onChangeText }) {
  return (
    <View style={styles.txtInputContainer}>
      <AntIcon name="search1" size={scale(16)} color={"#ccc"} />
      <TextInput
        onChangeText={onChangeText}
        value={search}
        placeholder="Search"
        style={styles.txtInputStyles}
      />
    </View>
  );
}
