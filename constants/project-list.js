import { View, Text } from "react-native";
import { scale } from "react-native-size-matters";
import { normalizeText } from "../responsive-text";
import { GlobalStyles } from "./constColors";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import AwsIcon from "react-native-vector-icons/MaterialCommunityIcons";
export default function ProjectList({
  Project_Name,
  Project_Due_Date,
  Project_Status_Value,
}) {
  // console.log("Town_Projects:", Town_Projects);

  return (
    <View
      style={{
        height: scale(80),
        width: "100%",
        borderBottomColor: GlobalStyles.colors.cardColor,
        borderBottomWidth: scale(1),
      }}
    >
      <View
        style={{
          // backgroundColor:'red',
          flexDirection: "row",
          minHeight: "100%",
          minWidth: "80%",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: scale(20),
        }}
      >
        <View
          style={{
            height: scale(58),
            width: scale(58),
            borderRadius: scale(58),
            borderColor: "#ccc",
            borderWidth: scale(2),
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "center",
              fontSize: normalizeText(24),
              fontWeight: "bold",
              color: GlobalStyles.colors.mainC,
            }}
          >
            {Project_Status_Value}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            // paddingHorizontal: scale(20),
            // paddingTop: scale(5),
          }}
        >
          <Text
            style={{
              fontSize: normalizeText(16),
              fontWeight: "bold",
              color: "#1a1a1a",
              paddingLeft: scale(20),
            }}
          >
            {Project_Name}
          </Text>
          <View
            style={{
              paddingLeft: scale(20),
              flexDirection: "row",
              // alignSelf: "center",
              marginVertical: scale(5),
            }}
          >
            <View
              style={{
                backgroundColor: "#FEF7E5",
                justifyContent: "center",
                borderRadius: scale(5),
                padding: scale(5),
                marginRight: scale(8),
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MatIcon name={"location-on"} size={scale(10)} color={"black"} />
              <Text
                style={{
                  fontSize: normalizeText(10),
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {"  "}
                Location
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#E5F4Fa",
                justifyContent: "center",
                borderRadius: scale(5),
                padding: scale(5),
                marginRight: scale(8),
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AwsIcon name={"timer-sand"} size={scale(10)} color={"black"} />

              <Text
                style={{
                  fontSize: normalizeText(10),
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {"  Due"} {Project_Due_Date}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
