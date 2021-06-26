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
import Icon from "react-native-vector-icons/Fontisto";
//import * as Icon from "react-native-feather";
import Feather from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
const CreateScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#00001f" barStyle="light-content" />
        <View style={styles.profile_uper}>
          <Text style={styles.profile_text}>PROFILE PICTURE</Text>
          <View style={styles.camera_uper}>
            <Image
              style={styles.camera}
              source={require("../Images/interface.png")}
            />
          </View>
        </View>

        <View style={styles.input_container}>
          <Text style={[styles.input_text, { marginLeft: 40 }]}>GENDER</Text>
          <View style={styles.gender_uper}>
            {/* male */}
            <View>
              <View style={styles.gender_male}>
                <Icon
                  name="male"
                  size={30}
                  color="#4F8EF7"
                  style={styles.male_profile}
                />
              </View>
              <Text
                style={[styles.input_text, { marginLeft: 10, marginTop: 10 }]}
              >
                MALE
              </Text>
            </View>
            {/* Female */}

            <View>
              <View style={styles.gender_female}>
                <Icon
                  name="female"
                  size={30}
                  color="#000000"
                  style={styles.female_profile}
                />
              </View>
              <Text
                style={[styles.input_text, { marginLeft: 10, marginTop: 10 }]}
              >
                FEMALE
              </Text>
            </View>
            {/* Others */}
            <View>
              <View style={styles.gender_female}>
                <Icon
                  name="male"
                  size={30}
                  color="#000000"
                  style={styles.female_profile}
                />
              </View>
              <Text
                style={[styles.input_text, { marginLeft: 10, marginTop: 10 }]}
              >
                OTHERS
              </Text>
            </View>
            <Feather
              name="check"
              color="white"
              size={18}
              style={[styles.check, { top: 30, right: 40 }]}
            />
          </View>
          {/* first input */}
          <Text style={styles.input_text}>USERNAME</Text>
          <View>
            <View style={styles.action}>
              <TextInput
                placeholder="Enter Email"
                style={[styles.TextInput, { paddingLeft: 3 }]}
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
          {/* Email */}
          {/* first input */}
          <Text style={styles.input_text}>EMAIL</Text>
          <View>
            <View style={styles.action}>
              <TextInput
                placeholder="Enter Email"
                style={[styles.TextInput, { paddingLeft: 3 }]}
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
          <Text style={styles.input_text}>PASSWORD</Text>
          <View>
            <View style={styles.action}>
              <TextInput
                placeholder="Enter Email"
                style={[styles.TextInput, { paddingLeft: 3 }]}
                value="davidwalb@gmail.com"
                secureTextEntry={true}
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

          <Text style={styles.input_text}>CONFIRM PASSWORD</Text>
          <View>
            <View style={styles.action}>
              <TextInput
                placeholder="Enter Email"
                style={[styles.TextInput, { paddingLeft: 3 }]}
                value="davidwalb@gmail.com"
                secureTextEntry={true}
              />

              <Feather name="x" color="white" size={18} style={styles.check} />
            </View>
          </View>

          <View>
            {/* third input */}
            <TouchableOpacity>
              <View style={styles.send}>
                <Text style={styles.send_text}>CREATE ACCOUNT</Text>
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
export default CreateScreen;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.17;

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
  profile_text: {
    color: "#A7A7A7",
    textAlign: "center",
    fontSize: 15,
  },
  input_container: {
    margin: 40,
    marginBottom: 0,
    marginTop: 10,
  },
  input_text: {
    color: "#A7A7A7",
    marginTop: 15,
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
  camera_uper: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: height_logo / 2,
    borderColor: "#24244B",
    height: height_logo,
    width: height_logo,
    marginTop: 10,
  },

  profile_uper: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  gender_uper: {
    flexDirection: "row",
    marginLeft: 20,
  },
  gender_male: {
    padding: 10,

    margin: 10,
    borderColor: "#5098F2",
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: "#5098F2",
  },
  gender_female: {
    padding: 10,

    margin: 10,
    borderColor: "#171732",
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: "#171732",
  },
  male_profile: {
    color: "white",
  },
});
