//import * as React from "react";
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
  Switch,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import ProgressCircle from "react-native-progress-circle";
import Bodyheader from "./header";
import { color } from "react-native-reanimated";
const DATA = [
  {
    id: "1",
    imageUrl: require("../Images/man_left.png"),
    logoUrl: require("../Images/logo.png"),
    title: "Heny Raminez",
    poits: "17980",
    logoNo: "5",
    NoColor: "#FFE635",
    tintColor: "#FFE630",
    profileV: {
      width: 60,
      height: 60,
      overflow: "hidden",
      top: 5,
      left: 10,
      borderRadius: 34,
    },
    ProfileI: {
      left: -40,
      height: 190,
      width: 150,
    },
  },
  {
    id: "2",
    logoUrl: require("../Images/logo.png"),
    imageUrl: require("../Images/hot_woman.png"),
    title: "Kara Cloutier",
    poits: "17980",
    logoNo: "5",
    NoColor: "#FFE635",
    tintColor: "#FFE630",
    profileV: {
      width: 60,
      height: 60,
      overflow: "hidden",
      top: 5,
      left: 10,
      borderRadius: 34,
    },
    ProfileI: {
      left: -40,
      height: 75,
      width: 110,
    },
  },
  {
    id: "3",
    logoUrl: require("../Images/logo.png"),
    imageUrl: require("../Images/man-with-black-and-gray-scarf-smiling.png"),
    title: "Carl Johnson",
    poits: "17980",
    logoNo: "4",
    NoColor: "#F85A0C",
    tintColor: "#F85100",
    profileV: {
      width: 60,
      height: 60,
      overflow: "hidden",
      top: 5,
      left: 10,
      borderRadius: 34,
    },
    ProfileI: {
      left: -40,
      height: 200,
      width: 130,
    },
  },
  {
    id: "4",
    logoUrl: require("../Images/logo.png"),
    imageUrl: require("../Images/black_jaket_man.png"),
    title: "Nathan Holt",
    poits: "17980",
    logoNo: "3",
    NoColor: "#CD28CD",
    tintColor: "#CB25CB",
    profileV: {
      width: 60,
      height: 60,
      overflow: "hidden",
      top: 5,
      left: 10,
      borderRadius: 34,
    },
    ProfileI: {
      left: -10,
      // height: 60,
      // width: 130,
      // top: 30,
    },
  },
  {
    id: "5",
    imageUrl: require("../Images/chashmiss.png"),
    logoUrl: require("../Images/logo.png"),
    title: "Jade Arnett",
    poits: "17980",
    logoNo: "2",
    NoColor: "#DC376E",
    tintColor: "#D93069",
    profileV: {
      width: 60,
      height: 60,
      overflow: "hidden",
      top: 5,
      left: 10,
      borderRadius: 34,
    },
    ProfileI: {
      left: -45,
      // height: 190,
      // width: 150,
    },
  },
];
const Item = ({
  id,
  title,
  imageUrl,
  logoUrl,
  points,
  logoNo,
  tintColor,
  profileVi,
  ProfileIm,
  NoColor,
}) => (
  <View style={styles.item_container}>
    <Text style={styles.P_id}>{id}</Text>
    <View style={[profileVi]}>
      <Image style={[ProfileIm]} source={imageUrl} />
    </View>
    <View>
      <Text style={styles.title}>{title}</Text>
      <MaterialCommunityIcons
        style={{ color: "white", padding: 20 }}
        name="star"
        size={17}
        color="red"
      />
      <Text style={styles.pointsText}>{points}</Text>
    </View>

    <View>
      <Image
        style={[styles.logoUrl, { tintColor: tintColor }]}
        source={logoUrl}
      />
    </View>
    <Text style={[styles.logoNo, { color: NoColor }]}>{logoNo}</Text>
  </View>
);

function RankingScreen() {
  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      logoUrl={item.logoUrl}
      tintColor={item.tintColor}
      profileVi={item.profileV}
      ProfileIm={item.ProfileI}
      points={item.poits}
      logoNo={item.logoNo}
      NoColor={item.NoColor}
    />
  );
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Bodyheader
        title={"DavidW"}
        ImageUrl={require("../Images/man-with-black-and-gray-scarf-smiling.png")}
      />
      {/* Body */}
      <View style={styles.News_container}>
        <Text style={styles.News}>RANKING</Text>
        <Text style={styles.monthly}>Monthly</Text>
        <View style={styles.toggle_uper}>
          {/* <View style={styles.toggle_circle}></View> */}
          {/* <MaterialCommunityIcons
            style={[styles.change_mty, { padding: 10 }]}
            name="toggle-switch-off"
            size={50}
            color="red"
          /> */}
          <Switch
            style={[styles.change_mty, { padding: 10, right: 10 }]}
            trackColor={{ false: "#767577", true: "#767577" }}
            thumbColor={"#36C7FF"}
            ios_backgroundColor="#212143"
            onValueChange={toggleSwitch}
            value={isEnabled}
            size={20}
          />
        </View>
        <Text style={styles.yearly}>Yearly</Text>
      </View>
      <View style={styles.list_uper}>
        <SafeAreaView style={styles.Flat}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}
export default RankingScreen;

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

  // genrate
  ProfileImage1: {
    height: 245,
    width: 200,
    left: -75,
  },
  profileView1: {
    width: 60,
    height: 60,
    overflow: "hidden",
    top: 20,
    left: 10,
    borderRadius: 34,
  },
  //

  // end
  ProfileName: {
    color: "white",
    top: 40,
    left: 30,
  },
  pointsText: {
    color: "white",
    fontSize: 17,
    bottom: 43,
    left: 50,
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
  logoNo: {
    color: "#ffffff",
    fontSize: 15,
    top: 28,
    left: -7,
    // fontWeight: "bold",

    color: "white",
  },
  circle: {
    top: 20,
    left: 100,
  },
  item_container: {
    flexDirection: "row",
    backgroundColor: "#00001f",
    height: 100,
    borderBottomWidth: 2,
    color: "#534AA2F4",
  },
  logoUrl: {
    height: 50,
    width: 50,
  },
  //  pata Nhi
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
    flexDirection: "row",
  },
  News: {
    color: "white",
    top: 20,
    width: 150,
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
  change_mty: {
    // color: "#212143",
    // margin: 10,
    // bottom: 10,
    top: 10,
  },

  toggle_uper: {
    // backgroundColor: "#36C7FF",
    height: 10,
    left: 30,

    // margin: 20,

    //paddingTop: 10,
    // overflow: "hidden",
    borderRadius: 50,
    // height: 10,
    // width: 15,
  },
  monthly: {
    color: "white",
    margin: 20,
    left: 50,
  },
  yearly: {
    color: "white",
    margin: 10,
    top: 10,
    left: 20,
  },
  Flat: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 17,
    color: "white",
    top: 15,
    left: 20,
    width: 200,
  },
  list_uper: {
    height: 453,
  },
  P_id: {
    fontSize: 17,
    color: "white",
    width: 10,
    margin: 20,
    marginRight: 30,
  },
});
