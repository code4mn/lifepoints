import React from "react";
import { LinearGradient } from "expo-linear-gradient";
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
import { ScrollView } from "react-native-gesture-handler";
//import * as Icon from "react-native-feather";
import Feather from "react-native-vector-icons/Feather";

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#00001f" barStyle="light-content" />
        <View style={styles.logo_uper}>
          <View>
            <LinearGradient
              start={{ y: 0.0, x: 0.25 }}
              end={{ y: 0.5, x: 1.0 }}
              locations={[0.6, 0.6]}
              colors={["#1A97B9", "#92CFE7"]}
              style={styles.linearGradient}
            ></LinearGradient>
          </View>
          <Image style={styles.logo} source={require("../Images/Logo2x.png")} />
        </View>
        <View style={styles.input_container}>
          {/* first input */}
          <Text style={styles.input_text}>EMAIL</Text>
          <View>
            <View style={styles.action}>
              <TextInput
                placeholder="Enter Email"
                style={[styles.TextInput, { paddingLeft: 3 }]}
                // keyboardType={"text"}
                value="davidwalb@gmail.com"
              />

              <Feather
                name="check"
                color="white"
                size={18}
                style={styles.check}
              />
            </View>
          </View>
          {/* Second Input */}
          <Text
            style={(styles.input_text, { color: "#A7A7A7", marginTop: 20 })}
          >
            PASSWORD
          </Text>
          <View>
            <View style={styles.action}>
              <TextInput
                placeholder="Enter Password"
                style={[styles.TextInput, { paddingLeft: 3, fontSize: 20 }]}
                // keyboardType={"text"}
                value="1234667894569885"
                secureTextEntry={true}
              />

              <Feather
                name="check"
                color="white"
                size={18}
                style={styles.check}
              />
            </View>
            {/* forgot Password */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ForgotScreen");
              }}
            >
              <Text
                style={(styles.input_text, { color: "#A7A7A7", marginTop: 20 })}
              >
                Forgot Password ?
              </Text>
            </TouchableOpacity>
            {/* third input */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("VerificationScreen");
              }}
            >
              <View style={styles.send}>
                <Text style={styles.send_text}>LOG IN</Text>
              </View>
            </TouchableOpacity>
            {/* end */}
            <View style={styles.create_one}>
              <Text
                style={(styles.input_text, { color: "#A7A7A7", marginTop: 20 })}
              >
                Don't have an account ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CreateScreen");
                }}
              >
                <Text
                  style={
                    (styles.input_text, { color: "#A7A7A7", marginTop: 20 })
                  }
                >
                  create one
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00001F",
  },
  logo: {
    margin: 45,
    marginTop: 35,

    justifyContent: "center",
    width: height_logo,
    height: height_logo,
  },

  logo_uper: {
    height: height_logo * 1.7,
    width: height_logo * 1.7,
    borderRadius: height_logo,
    borderColor: "#24244B",
    borderWidth: 2,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  logo_dot: {
    height: 4,
    width: 4,
  },
  linearGradient: {
    height: 14,
    width: 14,
    left: 180,
    top: 31,
  },
  input_container: {
    // backgroundColor: "red",
    margin: 40,
  },
  input_text: {
    color: "#A7A7A7",
  },
  TextInput: {
    fontSize: 17,
    letterSpacing: 1,

    color: "white",
    paddingTop: 10,
    marginBottom: 5,
  },
  action: {
    flexDirection: "row",
    width: "100%",
    // marginTop: 18,
    borderBottomColor: "#181835",
    borderBottomWidth: 3,
    paddingBottom: 5,
  },
  check: {
    height: 18,
    margin: 13,
    marginLeft: 100,
  },
  send_text: {
    color: "white",
    fontSize: 17,
  },
  send: {
    marginTop: 40,
    height: 55,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#0F68D7",
    borderRadius: 30,
    // borderBottomWidth: 1,
    borderColor: "#5098F2",
  },
  create_one: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
