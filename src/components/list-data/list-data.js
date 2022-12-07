import { View, Text, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import { normalizeText } from "../../../responsive-text";
import { GlobalStyles } from "../../../constants/constColors";
import MatIcon from "react-native-vector-icons/MaterialIcons";
import AwsIcon from "react-native-vector-icons/FontAwesome";
import MlcIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";

export default function ListData({ item = {}, index = -1 }) {
  const {
    title = "",
    profile = "",
    lable_one = "",
    lable_two = "",
    count = -1,
    key = "",
  } = item;

  function getFinalLabelOneIocnName() {
    switch (key) {
      case "Taluka-screen": {
        return "home";
      }
      default: {
        return "location-on";
      }
    }
  }

  return (
    <View style={styles.main_container}>
      <View style={styles.innerStyle}>
        <View style={styles.profile_container}>
          <Text style={styles.profile_TextStyle}>{profile}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Text style={styles.title_style}>{title}</Text>

          <View style={styles.lable_one_mainContainer}>
            <View style={styles.lable_one_innerContainer}>
              <MatIcon
                name={getFinalLabelOneIocnName()}
                size={scale(10)}
                color={"black"}
              />
              {key == "Taluka-screen" ? (
                <Text style={styles.lable_one_TextStyle}>
                  {" "}
                  {lable_one} Town
                </Text>
              ) : (
                <Text style={styles.lable_one_TextStyle}> {lable_one}</Text>
              )}
            </View>
            {key == "Town-screen" ? (
              <></>
            ) : (
              <View
                style={[
                  styles.lable_two_mainContainer,
                  {
                    backgroundColor:
                      key == "Taluka-screen" || key == "Project-screen"
                        ? "#E5F4Fa"
                        : "#FEF7E5",
                  },
                ]}
              >
                {key == "Taluka-screen" || "Project-screen" ? (
                  key == "Project-screen" ? (
                    <MlcIcon
                      name={"timer-sand"}
                      size={scale(10)}
                      color={"black"}
                    />
                  ) : (
                    <MatIcon
                      name={"location-on"}
                      size={scale(10)}
                      color={"black"}
                    />
                  )
                ) : (
                  <MatIcon
                    name={"location-on"}
                    size={scale(10)}
                    color={"black"}
                  />
                )}
                <Text
                  style={styles.lable_two_TextStyle}
                >
                  {lable_two}
                </Text>
              </View>
            )}
          </View>
        </View>

        {key !== "Project-screen" ? (
          <View
            style={styles.counter_mainContainer}
          >
            <Text
              style={styles.counter_TextStyle}
            >
              {count}
            </Text>
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}
