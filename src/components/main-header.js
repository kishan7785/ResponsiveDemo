import { View, Text, Pressable, Image } from "react-native";
import { scale } from "react-native-size-matters";
import { normalizeText } from "../../responsive-text";
export default function MainHeader({ navigation, title, onPress }) {
  return (
    <View
      style={{
        height: scale(64),
        flexDirection: "row",
        width: "100%",
        backgroundColor: "white",
        alignItems: "center",
        elevation: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/DrawerIcon.png")}
          style={{ height: scale(24), width: scale(24) }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: normalizeText(16),
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          DDO Dashboard
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Pressable onPress={onPress}>
          <Image
            source={require("../../assets/Notification.png")}
            style={{ height: scale(24), width: scale(24) }}
          />
        </Pressable>
      </View>
    </View>
  );
}
