import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntIcon from "react-native-vector-icons/AntDesign";
import { normalizeText } from "../../../responsive-text";
import { scale } from "react-native-size-matters";
import CustomButton from "../../../constants/custButton";
import ProjectDetailFlexBox from "../../components/projectDetailFlexBox";
import { GlobalStyles } from "../../../constants/constColors";
const ProjectDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  console.log("item:", item);

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
      <View style={styles.container}>
        <View style={styles.backTxtcontainer}>
          <AntIcon
            name={"arrowleft"}
            size={normalizeText(16)}
            color={"black"}
          />
          <Text
            style={{
              color: "black",
              fontSize: normalizeText(16),
              paddingHorizontal: scale(13),
              fontWeight: "bold",
            }}
          >
            Back
          </Text>
        </View>

        {/* title View */}
        <View
          style={[
            styles.backTxtcontainer,
            {
              height: scale(60),
              marginVertical: scale(20),
              width: "100%",
            },
          ]}
        >
          {/* Percentage Complete View */}
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              justifyContent: "center",
              height: scale(60),
              width: scale(60),
            }}
          >
            <Text
              style={{
                fontSize: normalizeText(12),
                fontWeight: "bold",
                color: "black",
              }}
            >
              36%
            </Text>
          </View>
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>Road Construction</Text>
            <Text
              style={{
                color: "#AEAEAE",
                fontSize: normalizeText(10),
                fontWeight: "400",
                marginBottom: scale(-20),
              }}
            >
              {" "}
              Last Update yesterday,01:08 AM
            </Text>
          </View>
          <View style={{}}>
            <CustomButton>Update</CustomButton>
          </View>
          <View style={{ position: "absolute", alignItems: "center" }}>
            <Image
              source={require("../../../assets/Vector.png")}
              style={{
                height: scale(60),
                width: scale(60),
                alignItems: "center",
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderBottomColor: "#AEAEAE",
            borderBottomWidth: 1,
          }}
        ></View>
        <View
          style={{
            marginVertical: scale(20),
            minHeight: scale(100),
            //   backgroundColor: "red",
          }}
        >
          <Text
            style={{
              fontSize: normalizeText(14),
              fontWeight: "bold",
              color: "black",
            }}
          >
            Project Description
          </Text>
          <Text
            style={{
              fontSize: normalizeText(12),
              textAlign: "justify",
              marginTop: scale(10),
              color: "#AEAEAE",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Mi dictumst porttitor at
            tincidunt. Nam molestie a lectus integer metus vitae nibh viverra
            et. Tincidunt fringilla proin in adipiscing.
          </Text>
          <Text
            style={{
              fontSize: normalizeText(14),
              fontWeight: "bold",
              color: "black",
              marginTop: scale(20),
            }}
          >
            Project Details
          </Text>
        </View>

        <ProjectDetailFlexBox />
        <View
          style={{
            height: scale(53),
            width: "120%",
            backgroundColor: "#FEF7E5",
            marginVertical: scale(20),
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: normalizeText(14),
              color: "black",
              fontWeight: "bold",
              paddingHorizontal: scale(30),
            }}
          >
            Activities
          </Text>
          <Text
            style={{
              fontSize: normalizeText(14),
              color: GlobalStyles.colors.mainC,
              fontWeight: "bold",
              paddingHorizontal: scale(30),
            }}
          >
            see all
          </Text>
        </View>

        {/* All-Activities */}
        <View style={{ height: scale(200), width: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              width: "70%",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginVertical: scale(10),
                fontSize: normalizeText(12),
                color: " #AEAEAE",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Mi dictumst porttitor at
              tincidunt Nam molestie.
            </Text>

            <View
              style={{
                width: "30%",
                marginLeft: scale(28),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/Vector.png")}
                style={{
                  height: scale(40),
                  width: scale(40),
                  justifyContent: "flex-end",
                  marginLeft: scale(20),
                }}
              />
              <View style={{ position: "absolute",justifyContent:'center',alignItems:'center' }}>
                <Text
                  style={{
                    fontSize: normalizeText(12),
                    fontWeight: "bold",
                    color: "black",
                    textAlign:'center',
                    marginLeft: scale(20),
                  }}
                >
                  36%
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProjectDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
    overflow: "hidden",
  },
  backTxtcontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: normalizeText(18),
    fontWeight: "800",
    color: "black",
    // textAlign: "center",
  },
  titlecontainer: {
    paddingHorizontal: scale(10),
    marginTop: scale(-20),
    Width: "60%",
  },
});
