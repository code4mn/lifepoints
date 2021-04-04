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
//import * as Icon from "react-native-feather";
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
const ForgotScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#00001f" barStyle="light-content" />
        <View style={styles.logo_uper}>
          <View>
            <LinearGradient
              start={{ y: 0.0, x: 0.15 }}
              end={{ y: 0.5, x: 1.0 }}
              locations={[0.6, 0.6]}
              colors={["#1A97B9", "#92CFE7"]}
              style={styles.linearGradient}
            ></LinearGradient>
          </View>
          <Image style={styles.logo} source={require("../Images/Logo2x.png")} />
        </View>
        <View style={styles.forgot_header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              color="white"
              size={20}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.forgot_text}>Forgot Password ?</Text>
        </View>
        <View style={styles.input_container}>
          <Text style={styles.regi_text}>
            Give us your registered email address and we'll send you link to
            reset your password
          </Text>
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

          <View>
            {/* third input */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("VerificationScreen");
              }}
            >
              <View style={styles.send}>
                <Text style={styles.send_text}>SEND</Text>
              </View>
            </TouchableOpacity>
            {/* end */}
            <View style={styles.create_one}>
              <Text
                style={(styles.input_text, { color: "#A7A7A7", marginTop: 20 })}
              >
                Have an account ?{"  "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
              >
                <Text
                  style={
                    (styles.input_text, { color: "#A7A7A7", marginTop: 20 })
                  }
                >
                  Log in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default ForgotScreen;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00001F",
  },
  logo: {
    margin: 25,
    marginTop: 16,

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
    height: 0.5,
    width: 0.5,
  },
  linearGradient: {
    height: 8,
    width: 8,
    left: 103,
    top: 12,
  },
  input_container: {
    // backgroundColor: "red",
    margin: 40,
  },
  input_text: {
    color: "#A7A7A7",
    marginTop: 80,
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
  forgot_header: {
    flexDirection: "row",
    marginTop: 35,
  },
  forgot_text: {
    fontSize: 35,
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#FFFFFF",
  },
  arrow: {
    height: 18,
    marginTop: 13,
    marginLeft: 30,
    width: 40,
    // marginLeft: 100,
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
  },
  create_one: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  check: {
    height: 18,
    margin: 13,
    marginLeft: 100,
  },
  regi_text: {
    color: "#ffffff",
  },
});
