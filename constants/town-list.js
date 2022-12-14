import { View, Text } from "react-native";
import { scale } from "react-native-size-matters";
import { normalizeText } from "../responsive-text";
import { GlobalStyles } from "./constColors";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import AwsIcon from "react-native-vector-icons/FontAwesome";
export default function TownList({ Town_Name, Town_Projects }) {
  // console.log("Town_Projects:", Town_Projects);
  const Initial = Town_Name.split(" ");
  if (Initial.length > 1) {
    var Temp =
      Initial[0].charAt(0).toUpperCase() + Initial[1].charAt(0).toUpperCase();
  } else {
    var Temp =
      Initial[0].charAt(0).toUpperCase() +
      Initial[0].charAt(Initial[0].length / 2).toUpperCase();
  }

  function getCount() {
    var counter = 0;
    Town_Projects?.forEach((x) => {
      counter = counter + x?.Town_Projects.length;
    });
    return counter;
  }

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
            {Temp}
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
            {Town_Name}
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
              {/* <MatIcon name={"home"} size={scale(10)} color={"black"} /> */}
              <Text
                style={{
                  fontSize: normalizeText(10),
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {"  "}
                Taluka ?
              </Text>
            </View>
     
          </View>
        </View>

        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            alignSelf: "center",
            height: scale(30),
            width: scale(30),
            borderRadius: scale(30),
            backgroundColor: "#00D02E",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: normalizeText(12),
            }}
          >
            {Town_Projects.length}
          </Text>
        </View>
      </View>
    </View>
  );
}
