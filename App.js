import React from "react";
import { PixelRatio, SafeAreaView, Text, View } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { normalizeText } from "./responsive-text";
import MainHeader from "./src/components/main-header";
import Routes from "./src/screen";
import {store} from "./Redux/store";
import { Provider } from "react-redux";

export default function App() {
  // console.log('PixelRatio.getFontScale()',PixelRatio.getFontScale());
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </Provider>
  );
}
