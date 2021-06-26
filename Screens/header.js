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

function Bodyheader(props) {
  return (
    <View>
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
              {props.G == "W" ? (
                <Image style={styles.ProfileImage} source={props.ImageUrl} />
              ) : (
                <Image style={styles.ProfileImageM} source={props.ImageUrl} />
              )}
            </View>
          </TouchableOpacity>
          <Text style={styles.ProfileName}>{props.title}</Text>
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
    </View>
  );
}
export default Bodyheader;

const styles = StyleSheet.create({
  ProfileName: {
    color: "white",
  },
  header: {
    height: 93,
    // backgroundColor: "#171732",
    flexDirection: "row",
  },
  ProfileImage: {
    left: -35,
    height: 180,
    width: 150,
  },
  ProfileImageM: {
    height: 245,
    width: 200,
    left: -75,
  },
  profileView: {
    width: 70,
    height: 70,
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
});
