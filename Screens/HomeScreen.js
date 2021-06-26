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
import Bodyheader from "./header";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#00001f" barStyle="light-content" />
      <Bodyheader
        title={"DavidW"}
        ImageUrl={require("../Images/man-with-black-and-gray-scarf-smiling.png")}
      />
      {/* <Bodyheader
        title={"DavidW"}
        G={"W"}
        ImageUrl={require("../Images/woman.png")}
      /> */}
      {/* Body */}
      <View style={styles.News_container}>
        <Text style={styles.News}>NEWS</Text>
      </View>
      <View style={styles.item_container}>
        <TouchableOpacity>
          <View style={styles.items1}>
            <Image
              style={styles.banner1}
              source={require("../Images/Image30.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.items2}>
            <Image
              style={styles.banner2}
              source={require("../Images/Image21.png")}
            />
            <Text style={styles.itemName}>Nike Joyride</Text>
            <Text style={styles.itemDiscription}>
              Lorem ipsum dolor sit amet, consectetur
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.items3}>
            <Image
              style={styles.banner3}
              source={require("../Images/Image32.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00001F",
    flex: 1,
    resizeMode: "cover",
  },
  ProfileName: {
    color: "white",
  },
  header: {
    height: 93,
    backgroundColor: "#171732",
    flexDirection: "row",
  },
  ProfileImage: {
    height: 245,
    width: 200,
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
});
