import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import AntIcon from "react-native-vector-icons/AntDesign";
import { normalizeText } from "../../../responsive-text";
import { scale } from "react-native-size-matters";
import CustomButton from "../../../constants/custButton";
import ProjectDetailFlexBox from "../../components/projectDetailFlexBox";
import { GlobalStyles } from "../../../constants/constColors";
const ProjectDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  // console.log("item:", item);
  const {
    title = "",
    profile = "",
    lable_one = "",
    lable_two = "",
    count = -1,
    key = "",
    Tdo_Name = "",
  } = item;

  //stats
  const [togglemodal, setToggleModal] = useState(false);

  function updatePressHandler() {
    setToggleModal(true);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
      <View style={styles.container}>
        <View style={styles.backTxtcontainer}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntIcon
              name={"arrowleft"}
              size={normalizeText(16)}
              color={"black"}
            />
          </Pressable>
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
              {profile}
            </Text>
          </View>
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>{title}</Text>
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
            <CustomButton onpress={updatePressHandler}>Update</CustomButton>
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

        <ProjectDetailFlexBox item={item} />
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
        <View style={{ width: "100%" }}>
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

              <View
                style={{
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: normalizeText(12),
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                    marginLeft: scale(20),
                  }}
                >
                  {profile}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/work.jpg")}
              style={{
                height: scale(60),
                width: scale(60),
                borderRadius: scale(5),
                borderColor: "#ccc",
                borderWidth: scale(1),
                marginRight: scale(10),
              }}
            />
            <Image
              source={require("../../../assets/work.jpg")}
              style={{
                height: scale(60),
                width: scale(60),
                borderRadius: scale(5),
                borderColor: "#ccc",
                borderWidth: scale(1),
                marginRight: scale(10),
              }}
            />
            <Image
              source={require("../../../assets/work.jpg")}
              style={{
                height: scale(60),
                width: scale(60),
                borderRadius: scale(5),
                borderColor: "#ccc",
                borderWidth: scale(1),
                marginRight: scale(10),
              }}
            />
            <Image
              source={require("../../../assets/work.jpg")}
              style={{
                height: scale(60),
                width: scale(60),
                borderRadius: scale(5),
                borderColor: "#ccc",
                borderWidth: scale(1),
                marginRight: scale(10),
              }}
            />
          </View>
          <View
            style={{
              marginVertical: scale(15),
            }}
          >
            <Text
              style={{
                fontSize: normalizeText(12),
                fontWeight: "400",
                color: "black",
              }}
            >
              Updated on 16/07/19 , 1:08 AM
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: scale(1), borderColor: "#ccc" }}
          ></View>
        </View>
        <View style={{ width: "100%" }}>
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

              <View
                style={{
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: normalizeText(12),
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                    marginLeft: scale(20),
                  }}
                >
                  {profile}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/work.jpg")}
              style={{
                height: scale(60),
                width: scale(60),
                borderRadius: scale(5),
                borderColor: "#ccc",
                borderWidth: scale(1),
                marginRight: scale(10),
              }}
            />
            <Image
              source={require("../../../assets/work.jpg")}
              style={{
                height: scale(60),
                width: scale(60),
                borderRadius: scale(5),
                borderColor: "#ccc",
                borderWidth: scale(1),
                marginRight: scale(10),
              }}
            />
            <Image
              source={require("../../../assets/work.jpg")}
              style={{
                height: scale(60),
                width: scale(60),
                borderRadius: scale(5),
                borderColor: "#ccc",
                borderWidth: scale(1),
                marginRight: scale(10),
              }}
            />
            <Image
              source={require("../../../assets/work.jpg")}
              style={{
                height: scale(60),
                width: scale(60),
                borderRadius: scale(5),
                borderColor: "#ccc",
                borderWidth: scale(1),
                marginRight: scale(10),
              }}
            />
          </View>
          <View
            style={{
              marginVertical: scale(15),
            }}
          >
            <Text
              style={{
                fontSize: normalizeText(12),
                fontWeight: "400",
                color: "black",
              }}
            >
              Updated on 16/07/19 , 1:08 AM
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: scale(1), borderColor: "#ccc" }}
          ></View>
        </View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={togglemodal}
          onRequestClose={() => {
            setToggleModal(false);
          }}
          backdropOpacity={.5}
          style={{margin:0}}
          
        >
          <View
            style={{
              height: "60%",
              width: "100%",
              borderTopStartRadius: scale(10),
              borderTopEndRadius: scale(10),
              alignSelf: "flex-end",
              marginTop: "65%",
              elevation: 5,
              backgroundColor: "#fff",
            }}
          >
            <View
              style={{
                height: 53,
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: GlobalStyles.colors.light_mainC,
                borderTopStartRadius: scale(10),
                borderTopEndRadius: scale(10),
                paddingHorizontal: scale(20),
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: normalizeText(14),
                  fontWeight: "bold",
                  // color: "black",
                  color: "#000",
                  justifyContent: "flex-start",
                }}
              >
                Update Project
              </Text>
              <Pressable
                onPress={() => {
                  setToggleModal(false);
                }}
              >
                <AntIcon name={"close"} size={normalizeText(18)} />
              </Pressable>
            </View>
            <ScrollView>
              <View style={{ padding: scale(20) }}>
                <Text
                  style={{
                    fontSize: normalizeText(12),
                    fontWeight: "600",
                    color: "#000",
                  }}
                >
                  Description
                </Text>
                <View
                  style={{
                    height: scale(80),
                    width: "100%",
                    // alignSelf: "center",
                    borderRadius: scale(5),
                    borderColor: "#d0d0d0",
                    borderWidth: 1,
                    // textAlign: "justify",
                    marginVertical: scale(5),
                  }}
                >
                  <TextInput multiline={true} style={{fontSize:normalizeText(16),flex:1}}/>
                </View>
                <Text
                  style={{
                    fontSize: normalizeText(12),
                    fontWeight: "600",
                    color: "#000",
                  }}
                >
                  Upload Image
                </Text>
                <View
                  style={{
                    marginVertical: scale(5),
                    flexDirection: "row",
                    width: "100%",
                    // backgroundColor: "red",
                  }}
                >
                  <View
                    style={{
                      height: scale(60),
                      width: scale(60),
                      borderRadius: scale(5),
                      borderStyle: "dashed",
                      borderColor: "#ccc",
                      borderWidth: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AntIcon
                      name="plus"
                      size={normalizeText(16)}
                      color={"#ccc"}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: normalizeText(12),
                    color: "#000",
                    fontWeight: "600",
                    marginBottom: scale(10),
                  }}
                >
                  Progress
                </Text>
                <View
                  style={{
                    backgroundColor: GlobalStyles.colors.light_mainC,
                    flexDirection: "row",
                    borderRadius: scale(5),
                    marginBottom: scale(20),
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: scale(20),
                    height: scale(48),
                  }}
                >
                  <AntIcon
                    name="minussquareo"
                    size={normalizeText(20)}
                    color="#000"
                  />
                  <Text
                    style={{
                      color: GlobalStyles.colors.mainC,
                      fontSize: normalizeText(20),
                      fontWeight: "bold",
                    }}
                  >
                    {profile}
                  </Text>
                  <AntIcon
                    name="plussquareo"
                    size={normalizeText(20)}
                    color="#000"
                  />
                </View>
                <CustomButton>Update</CustomButton>
              </View>
            </ScrollView>
          </View>
        </Modal>
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
    maxWidth: "60%",
    minWidth: "55%",
  },
});
