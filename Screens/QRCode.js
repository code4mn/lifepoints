import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ProgressCircle from "react-native-progress-circle";

function QRCodeScreen() {
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="#00001f" barStyle="light-content" /> */}
      <LinearGradient
        start={{ x: 0.6, y: 0.5 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.5, 1]}
        colors={["#2A2656", "#1e1c3f", "#181733"]}
        style={styles.LinearGradient}
      >
        <View style={styles.header}>
          <TouchableOpacity>
            <View style={styles.profileView}>
              <Image
                style={styles.ProfileImage}
                source={require("../Images/man-with-black-and-gray-scarf-smiling.png")}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.ProfileName}>DavidW</Text>
          <View style={styles.points}>
            <Text style={styles.pointsText}>Points</Text>
            <Text style={styles.pointsText}>40</Text>
          </View>

          <View style={styles.logo}>
            <ProgressCircle
              percent={50}
              radius={30}
              borderWidth={4}
              color="#36C7FF"
              shadowColor="#00001F"
              bgColor="#171732"
              style={styles.circle}
            >
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={styles.logoImage}
                  source={require("../Images/logo.png")}
                />
              </TouchableOpacity>
            </ProgressCircle>
            <Text style={styles.logNo}>1</Text>
          </View>
        </View>
      </LinearGradient>
      {/* Body */}
      <View style={styles.News_container}>
        <Text style={styles.News}>DIGITAL MEMBER CARD</Text>
      </View>
      <View style={styles.body}>
        <Image style={styles.qrcode} source={require("../Images/qrcode.png")} />
      </View>
    </View>
  );
}
export default QRCodeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00001F",
  },
  ProfileName: {
    color: "white",
  },
  header: {
    height: 93,
    // backgroundColor: "#171732",
    flexDirection: "row",
  },
  ProfileImage: {
    height: 245,
    width: 200,
    //  position: "relative",
    //   // top: 20,
    left: -75,
  },
  profileView: {
    width: 60,
    height: 60,
    overflow: "hidden",
    top: 20,
    left: 10,
    borderRadius: 34,
  },
  ProfileName: {
    color: "white",
    top: 40,
    left: 30,
  },
  pointsText: {
    color: "white",
  },
  points: {
    top: 30,
    left: 160,
  },
  logo: {
    height: 60,
    width: 60,
    // borderRadius: 34,
    // // borderColor: "red",
    // borderWidth: 3,
    left: 180,
    top: 20,

    borderTopColor: "#36C7FF",
    borderLeftColor: "#00001F",
    borderRightColor: "#36C7FF",
    borderBottomColor: "#00001F",
  },
  logoImage: {
    height: 30,
    width: 30,
    margin: 10,
    marginTop: 15,
    tintColor: "#32C5FF",
  },
  logNo: {
    color: "#ffffff",
    fontSize: 10,
    top: -22,
    left: 40,
    fontWeight: "bold",

    color: "white",
  },
  circle: {
    top: 20,
    left: 100,
  },
  item_container: {
    flexDirection: "row",
    backgroundColor: "#00001F",
    height: 500,
  },
  items2: {
    height: 420,
    backgroundColor: "#171732",
    overflow: "hidden",
    borderRadius: 15,
    // right: 270,
  },
  banner2: {
    height: 350,
    width: 300,
  },
  items1: {
    height: 420,
    width: 50,
    // backgroundColor: "#171732",
    overflow: "hidden",
    borderRadius: 15,
  },
  banner1: {
    height: 350,
    width: 350,
    margin: 30,
    marginLeft: -10,
    right: 310,
    borderRadius: 15,
  },
  items3: {
    height: 420,
    width: 50,
    // backgroundColor: "#171732",
    overflow: "hidden",
    borderRadius: 15,
  },
  banner3: {
    height: 350,
    width: 350,
    margin: 22,
    marginRight: -10,
    // left: 310,
    borderRadius: 15,
  },
  News_container: {
    height: 60,
  },
  News: {
    color: "white",
    top: 20,
  },
  itemDiscription: {
    color: "white",
    fontWeight: "normal",
    fontSize: 12,
    left: 15,
    top: 10,
  },
  itemName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    left: 15,
    top: 10,
  },
  LinearGradient: {
    height: 100,
  },
  qrcode: {
    height: 275,
    width: 275,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#A8A8A8",
  },
  body: {
    alignContent: "center",
    height: 500,
    // width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
