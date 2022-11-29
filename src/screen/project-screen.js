import {Text, View,SafeAreaView,TextInput} from 'react-native';
import { scale } from "react-native-size-matters";
import Svg, { Path, G } from "react-native-svg";
import { normalizeText } from "../../responsive-text";
export default function ProjectScreen() {
  return (
    <SafeAreaView style={{ flex: 1, }}>
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: scale(1),
        borderBottomColor: "#ccc",
        width: "89%",
        alignItems: "center",
        margin: scale(20),

      }}
    >
      <Svg
        width={scale(16)}
        height={scale(16)}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M7.66668 14C11.1645 14 14 11.1645 14 7.66668C14 4.16887 11.1645 1.33334 7.66668 1.33334C4.16887 1.33334 1.33334 4.16887 1.33334 7.66668C1.33334 11.1645 4.16887 14 7.66668 14Z"
          stroke="#AEAEAE"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.6667 14.6667L13.3333 13.3333"
          stroke="#AEAEAE"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <TextInput placeholder="Search" style={{fontSize:normalizeText(16),marginHorizontal:scale(3),overflow:'hidden',maxWidth:'90%'}}
       />
    </View>
  </SafeAreaView>
  );
}

