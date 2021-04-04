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
} from "react-native";
const SplashScreen = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("LoginScreen")}
    >
      <View>
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
      </View>
    </TouchableOpacity>
  );
};
export default SplashScreen;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00001F",
  },
  logo: {
    margin: 60,
    marginTop: 50,

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
  },
  logo_dot: {
    height: 5,
    width: 5,
  },
  linearGradient: {
    height: 16,
    width: 17,
    left: 275,
    top: 33,
  },
});

//
// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Dimensions,
//   StyleSheet,
//   StatusBar,
//   Image,
// } from "react-native";
// import * as Animatable from "react-native-animatable";
// import { LinearGradient } from "expo-linear-gradient";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { useTheme } from "@react-navigation/native";

// const SplashScreen = ({ navigation }) => {
//   const { colors } = useTheme();

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Animatable.Image
//           animation="bounceIn"
//           duraton="1500"
//           source={require("../assets/logo.png")}
//           style={styles.logo}
//           resizeMode="stretch"
//         />
//       </View>
//       <Animatable.View
//         style={[
//           styles.footer,
//           {
//             backgroundColor: colors.background,
//           },
//         ]}
//         animation="fadeInUpBig"
//       >
//         <Text style={styles.title}>Stay connected with everyone!</Text>
//         <Text style={styles.text}>Sign in with account</Text>
//         <View style={styles.button}>
//           <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
//             <LinearGradient
//               colors={["#5db8fe", "#39cff2"]}
//               style={styles.signIn}
//             >
//               <Text style={styles.textSign}>Get Started</Text>
//               <MaterialIcons name="navigate-next" color="#fff" size={20} />
//             </LinearGradient>
//           </TouchableOpacity>
//         </View>
//       </Animatable.View>
//     </View>
//   );
// };

// export default SplashScreen;

// const { height } = Dimensions.get("screen");
// const height_logo = height * 0.7 * 0.4;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#05375a",
//   },
//   header: {
//     flex: 2,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   footer: {
//     flex: 1,
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingVertical: 50,
//     paddingHorizontal: 30,
//   },
//   logo: {
//     width: height_logo,
//     height: height_logo,
//   },
//   title: {
//     color: "#05375a",
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   text: {
//     color: "grey",
//     marginTop: 5,
//   },
//   button: {
//     alignItems: "flex-end",
//     marginTop: 30,
//   },
//   signIn: {
//     width: 150,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 50,
//     flexDirection: "row",
//   },
//   textSign: {
//     color: "white",
//     fontWeight: "bold",
//   },
// });
