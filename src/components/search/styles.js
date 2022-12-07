import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { normalizeText } from "../../../responsive-text";

export const styles = StyleSheet.create({
  maincontainer: { flex: 1 },
  txtInputContainer: {
    flexDirection: "row",
    borderBottomWidth: scale(1),
    borderBottomColor: "#ccc",
    width: "89%",
    alignItems: "center",
    marginTop: scale(20),
    marginHorizontal: scale(20),
  },
  txtInputStyles: {
    fontSize: normalizeText(16),
    marginHorizontal: scale(3),
    overflow: "hidden",
    maxWidth: "90%",
  },
});
