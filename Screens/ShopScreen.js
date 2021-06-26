import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Modal,
  Alert,
} from "react-native";
import Bodyheader from "./header";
import { LinearGradient } from "expo-linear-gradient";
import { TapGestureHandler } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ShopScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Bodyheader
        title={"DavidW"}
        ImageUrl={require("../Images/man-with-black-and-gray-scarf-smiling.png")}
      />
      {/* Body */}
      {/* Modal */}
      <Modal
        animationType="center"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={[styles.textClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <MaterialCommunityIcons
                style={[styles.textStyle]}
                onPress={() => setModalVisible(!modalVisible)}
                name="window-close"
                size={35}
                color="white"
              />
              {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
            </TouchableOpacity>
            <View
              style={{
                zIndex: -1,
              }}
            >
              <Image
                style={styles.shose_addidas}
                source={require("../Images/Image15.png")}
              />

              <Image
                style={styles.logo_addidas}
                source={require("../Images/logo_addidas.png")}
              />
            </View>
            <View>
              <Text style={[styles.details, { margin: 10, right: 100 }]}>
                Adidas 10 % Off
              </Text>
            </View>
            <View style={{ left: 100, top: -50 }}>
              <Text style={[styles.details, { fontWeight: "bold" }]}>300</Text>
              <Text style={styles.details}>Points</Text>
            </View>
            <View>
              <Text
                style={[
                  styles.details,
                  { margin: 10, textAlign: "center", fontSize: 15, top: -50 },
                ]}
              >
                Get 10% Off of a €100 purchase. Go to your nearest store to
                avail this discount. Valid from Jun - July, 2020
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>BUY NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Modal end */}
      <View style={styles.Body_Container}>
        <View style={styles.News_container}>
          <Text style={styles.News}>SHOP</Text>
          <View style={styles.ContainerImage}>
            <View style={styles.firstImage1}>
              <LinearGradient
                colors={["#00643C", "#1A3C34"]}
                style={styles.LinearGradient}
              >
                <View style={styles.textView}>
                  <Text style={[styles.PointsN]}>200</Text>
                  <Text style={styles.Points}>Points</Text>
                </View>
                <View>
                  <Image
                    style={styles.glass}
                    source={require("../Images/slogo.png")}
                  />

                  <Image
                    style={styles.glass_d}
                    source={require("../Images/pngwave.png")}
                  />
                </View>
              </LinearGradient>
            </View>
            <View style={[styles.firstImage]}>
              <LinearGradient
                colors={["#3B3B3B", "#1C1C1C"]}
                style={styles.LinearGradient1}
              >
                <View>
                  <Image
                    style={styles.apple_logo}
                    source={require("../Images/apple-512.png")}
                  />
                  <Image
                    style={styles.apple_M}
                    source={require("../Images/kindpng_909970.png")}
                  />
                </View>
                <View style={styles.textView1}>
                  <Text style={styles.PointsN}>500</Text>
                  <Text style={styles.Points}>Points</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
          {/* s */}
          <View style={styles.ContainerImage}>
            <View style={styles.firstImage}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <LinearGradient
                  colors={["#0F68D7", "#5098F2"]}
                  style={styles.LinearGradient3}
                >
                  <View style={[styles.textView, { left: 100, top: 15 }]}>
                    <Text style={[styles.PointsN]}>300</Text>
                    <Text style={styles.Points}>Points</Text>
                  </View>
                  <View>
                    <Image
                      style={styles.shose_logo}
                      source={require("../Images/kindpng_1729325.png")}
                    />

                    <Image
                      style={styles.shose}
                      source={require("../Images/shose.png")}
                    />
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={[styles.firstImage, { top: -40 }]}>
              <LinearGradient
                colors={["#BE84FF", "#C8A2F1"]}
                style={styles.LinearGradient4}
              >
                <View>
                  <Image
                    style={styles.spotify_logo}
                    source={require("../Images/PngItem_263103.png")}
                  />
                  <Image
                    style={styles.wonan_music}
                    source={require("../Images/woman_music.png")}
                  />
                </View>
                <View style={[styles.textView1, { top: -130, left: 100 }]}>
                  <Text style={styles.PointsN}>100</Text>
                  <Text style={styles.Points}>Points</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
          {/*  */}
          <View style={styles.ContainerImage}>
            <View style={styles.firstImage}>
              <LinearGradient
                colors={["#F5F5F5", "#F5F5F5"]}
                style={[styles.LinearGradient3, { top: -100 }]}
              >
                <View style={[styles.textView, { left: 100, top: 15 }]}>
                  <Text style={[styles.PointsN, { color: "#B8B8B8" }]}>
                    200
                  </Text>
                  <Text style={[styles.Points, { color: "#B8B8B8" }]}>
                    Points
                  </Text>
                </View>
                <View>
                  <Image
                    style={styles.netflix_logo}
                    source={require("../Images/netflix_logo.png")}
                  />

                  <Image
                    style={styles.netflix}
                    source={require("../Images/netflix.png")}
                  />
                </View>
              </LinearGradient>
            </View>

            <View style={[styles.firstImage, { top: -60 }]}>
              <LinearGradient
                colors={["#E59323", "#E59323"]}
                style={styles.LinearGradient4}
              ></LinearGradient>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default ShopScreen;

const styles = StyleSheet.create({
  Body_Container: {
    backgroundColor: "#00001F",

    height: 7000,
  },
  centeredView: {
    marginTop: 80,
    flex: 1,
    resizeMode: "cover",
    // height: 700,
  },
  News_container: {
    height: 60,
  },
  News: {
    color: "white",
    top: 20,
  },
  firstImage: {
    width: 190,
    margin: 10,
    top: 20,
    // overflow: "hidden",
  },
  firstImage1: {
    width: 190,
    margin: 10,
    top: 20,
    // overflow: "hidden",
  },
  Points: {
    color: "white",
    left: 20,
  },
  PointsN: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    left: 20,
  },
  ContainerImage: {
    flexDirection: "row",
  },
  LinearGradient: {
    borderRadius: 10,
    height: 180,
  },
  LinearGradient1: {
    borderRadius: 10,
    height: 250,
    marginRight: 10,
  },
  LinearGradient4: {
    height: 180,
    borderRadius: 10,
    top: 50,
  },
  glass: {
    width: 50,
    height: 50,
    left: 100,
    top: -30,
    // flot: "left",
  },
  glass_d: {
    width: 80,
    // height: 120,
    top: -40,
    left: 10,
  },
  textView: {
    top: 10,
  },
  textView1: {
    top: -100,
  },
  apple_logo: {
    margin: 12,
    width: 40,
    height: 40,
  },
  apple_M: {
    left: 60,
    height: 220,
    width: 220,
    bottom: 50,
    marginRight: 20,
  },
  wonan_music: {
    height: 120,
    width: 120,
    top: 25,
    left: 65,
  },
  LinearGradient3: {
    borderRadius: 10,
    height: 185,
    top: -85,
  },
  spotify_logo: {
    top: 20,
    height: 35,
    width: 115,
    left: 5,
  },
  shose: {
    top: -20,
    left: 45,
    height: 100,
    width: 150,
  },
  details: {
    fontSize: 20,
    // fontWeight: "bold",
    color: "white",
  },
  netflix: {
    top: -15,
    // left: 45,
    height: 100,
    width: 150,
    right: 34,
  },
  shose_logo: {
    width: 50,
    height: 50,
    left: 10,
    top: -30,
  },
  netflix_logo: {
    // width: 50,
    // height: 50,
    left: 10,
    top: -25,
  },
  shose_addidas: {
    width: 390,
    marginLeft: 22,
    resizeMode: "stretch",
    marginTop: -140,
    height: 220,
  },
  logo_addidas: {
    height: 50,
    width: 50,
    left: 320,
    top: -200,

    // height: 220,
  },
  //paste
  modalView: {
    // margin:,
    // height: 450,
    margin: 20,
    marginTop: 140,
    backgroundColor: "#171732",
    borderRadius: 35,
    borderBottomLeftRadius: 0,
    borderTopEndRadius: 0,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    elevation: 2,
  },
  // buttonOpen: {
  //   backgroundColor: "#F194FF",
  // },
  buttonClose: {
    backgroundColor: "#0F68D7",
    height: 50,
    top: -40,
    width: 350,
  },
  textStyle: {
    color: "white",
    // fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textClose: {
    color: "white",
    // width: 40,
    // height: 40,
    borderRadius: 50,
    backgroundColor: "#494949",
    left: 180,
    textAlign: "center",
    // top: -50,

    zIndex: 10,
  },
});
