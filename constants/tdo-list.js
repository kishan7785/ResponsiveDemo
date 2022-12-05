import { View, Text, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import { normalizeText } from "../responsive-text";
import { GlobalStyles } from "./constColors";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import AwsIcon from "react-native-vector-icons/FontAwesome";
export default function ListData({ item = {}, index = -1 }) {
  const {
    title = "",
    profile = "",
    lable_one = "",
    lable_two = "",
    count = -1,
    display_charactor = "",
  } = item;

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
            {profile}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
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
            {title}
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
                {lable_one}
              </Text>
            </View>
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
                {lable_two}
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
            {count}
          </Text>
        </View>
      </View>
    </View>
  );
}
