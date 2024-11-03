import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import { AppStackParamList } from "./types";

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppStackNavigatior = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={HomeScreen} />
        <AppStack.Screen name="ProductDetails" component={ProductDetails} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackNavigatior;
