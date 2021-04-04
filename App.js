import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

//

import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RootStackScreen from "./Screens/RootStack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to detials screens"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
const DetailsScreen = () => {
  return (
    <View>
      <Text>This is the DetailsScreen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
