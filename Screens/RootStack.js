import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import SplashScreen from "./Splash";
import LoginScreen from "./Login";
import CreateScreen from "./Create";
import ForgotScreen from "./Forgot";
import VerificationScreen from "./Verification";
import ResetScreen from "./ResetPassword";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      <RootStack.Screen name="CreateScreen" component={CreateScreen} />
      <RootStack.Screen name="ForgotScreen" component={ForgotScreen} />
      <RootStack.Screen name="ResetScreen" component={ResetScreen} />
      <RootStack.Screen
        name="VerificationScreen"
        component={VerificationScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
