/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

// Screens
import HomeScreen from "../screens/Home/home-screen";
import SavingScreen from "../screens/Savings/saving-screen";
import PaymentScreen from "../screens/Payments/payment-screen";
import PlusScreen from "../screens/Plus/plus-screen";
import StatisticsScreen from "../screens/Statistics/statastics";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  BottomTabParamList,
  HomeScrenList,
  PaymentScreenList,
  PlusScreenList,
  SavingScreenList,
  StatisticsScreenList,
  TabOneParamList,
  TabTwoParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-sharp" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Statistics"
        component={StatisticsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bar-chart" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Saving"
        component={SavingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="wallet" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Payment"
        component={PaymentNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cash" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Plus"
        component={PlusNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="menu" color={color} />,
        }}
      />
      {/* <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
// const TabOneStack = createStackNavigator<TabOneParamList>();
// function TabOneNavigator() {
//   return (
//     <TabOneStack.Navigator>
//       <TabOneStack.Screen
//         name="TabOneScreen"
//         component={TabOneScreen}
//         options={{ headerTitle: "Tab One Title" }}
//       />
//     </TabOneStack.Navigator>
//   );
// }

// const TabTwoStack = createStackNavigator<TabTwoParamList>();
// function TabTwoNavigator() {
//   return (
//     <TabTwoStack.Navigator>
//       <TabTwoStack.Screen
//         name="TabTwoScreen"
//         component={TabTwoScreen}
//         options={{ headerTitle: "Tab Two Title" }}
//       />
//     </TabTwoStack.Navigator>
//   );
// }

// Create Stack Navigation
const HomeStack = createStackNavigator<HomeScrenList>();
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
const savingStack = createStackNavigator<SavingScreenList>();
const SavingNavigator = () => {
  return (
    <savingStack.Navigator>
      <savingStack.Screen name="Saving" component={SavingScreen} />
    </savingStack.Navigator>
  );
};
const paymentStack = createStackNavigator<PaymentScreenList>();
const PaymentNavigator = () => {
  return (
    <paymentStack.Navigator>
      <paymentStack.Screen name="Payment" component={PaymentScreen} />
    </paymentStack.Navigator>
  );
};
const plusStack = createStackNavigator<PlusScreenList>();
const PlusNavigator = () => {
  return (
    <plusStack.Navigator>
      <plusStack.Screen name="Plus" component={PlusScreen} />
    </plusStack.Navigator>
  );
};
const statisticsStack = createStackNavigator<StatisticsScreenList>();
const StatisticsNavigator = () => {
  return (
    <statisticsStack.Navigator>
      <statisticsStack.Screen name="Statistcs" component={StatisticsScreen} />
    </statisticsStack.Navigator>
  );
};
