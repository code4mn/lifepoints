import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import QRCodeScreen from "./QRCode";
import RankingScreen from "./Ranking";
import ShopScreen from "./ShopScreen";

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabScreen({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#D93069"
      barStyle={{ backgroundColor: "#020222" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Qrcode"
        component={QRCodeScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("../Images/qr.png")}
              resizeMode="contain"
              style={{
                tintColor: focused ? color : "white",
                height: 28,
                width: 28,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={RankingScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="trophy-outline"
              color={color}
              size={28}
              height={28}
              width={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default TabScreen;
