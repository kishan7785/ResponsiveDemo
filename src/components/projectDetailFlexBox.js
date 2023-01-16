import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import { scale } from "react-native-size-matters";
import { normalizeText } from "../../responsive-text";
import { GlobalStyles } from "../../constants/constColors";

export default function ProjectDetailFlexBox({ item }) {
  const {
    title = "",
    profile = "",
    lable_one = "",
    lable_two = "",
    count = -1,
    key = "",
    Tdo_Name = "",
  } = item;
  const fullAddress = lable_one.split(",");
  const projectTown = fullAddress[0];
  const projectTaluka = fullAddress[1];
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: scale(10),
        }}
      >
        <View style={styles.projectDetails}>
          <View style={{ justifyContent: "center", margin: scale(10) }}>
            <Image
              source={require("../../assets/calender.png")}
              style={styles.pngstyle}
            />
          </View>
          <View>
            <Text style={styles.textstyle}>project start Date</Text>
            <Text numberOfLines={1} style={styles.text1style}>
              01/01/19
            </Text>
          </View>
        </View>
        <View style={styles.projectDetails}>
          <View style={{ justifyContent: "center", margin: scale(10) }}>
            <Image
              source={require("../../assets/timer.png")}
              style={styles.pngstyle}
            />
          </View>
          <View>
            <Text style={styles.textstyle}>Project Due Date</Text>
            <Text numberOfLines={1} style={styles.text1style}>
              {lable_two}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: scale(10),
        }}
      >
        <View style={styles.projectDetails}>
          <View style={{ justifyContent: "center", margin: scale(10) }}>
            <Image
              source={require("../../assets/home.png")}
              style={styles.pngstyle}
            />
          </View>
          <View>
            <Text style={styles.textstyle}>Project Town</Text>
            <Text numberOfLines={1} style={styles.text1style}>
              {projectTown}
            </Text>
          </View>
        </View>
        <View style={styles.projectDetails}>
          <View style={{ justifyContent: "center", margin: scale(10) }}>
            <MatIcon
              name={"location-on"}
              size={scale(20)}
              color={GlobalStyles.colors.mainC}
            />
          </View>
          <View>
            <Text style={styles.textstyle}>Project Taluka</Text>
            <Text numberOfLines={1} style={styles.text1style}>
              {projectTaluka}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: scale(10),
        }}
      >
        <View style={styles.projectDetails}>
          <View style={{ justifyContent: "center", margin: scale(10) }}>
            <Image
              source={require("../../assets/teacher.png")}
              style={styles.pngstyle}
            />
          </View>
          <View style={{ overflow: "hidden", width: "71%" }}>
            <Text style={styles.textstyle}>Project TDO Name</Text>
            <Text numberOfLines={1} style={styles.text1style}>
              {Tdo_Name}
            </Text>
          </View>
        </View>
        <View style={styles.projectDetails}>
          <View style={{ justifyContent: "center", margin: scale(10) }}>
            <Image
              source={require("../../assets/wallet.png")}
              style={styles.pngstyle}
            />
          </View>
          <View>
            <Text style={styles.textstyle}>Project Budget</Text>
            <Text numberOfLines={1} style={styles.text1style}>
              ₹ 20,000
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  projectDetails: {
    height: scale(50),
    width: scale(150),
    borderColor: "#cccc",
    borderRadius: scale(5),
    borderWidth: 1,
    marginHorizontal: scale(5),
    flexDirection: "row",
    // backgroundColor:'red',
    overflow: "hidden",
  },
  pngstyle: {
    alignItems: "center",
    height: scale(20),
    width: scale(20),
    justifyContent: "center",
  },
  textstyle: {
    fontSize: normalizeText(9),
    marginTop: scale(8),
    color: GlobalStyles.colors.mainC,
    fontWeight: "400",
  },
  text1style: {
    marginTop: scale(2),
    fontSize: normalizeText(16),
    color: "black",
    fontWeight: "bold",
  },
});
