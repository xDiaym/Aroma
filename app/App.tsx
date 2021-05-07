import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageSourcePropType, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import Timer from "./components/Timer";
import Animated, {
  block,
  Clock, clockRunning, color, cond, debug,
  Easing,
  set, startClock, stopClock,
  timing,
  useCode,
  Value
} from "react-native-reanimated";
import FilmDescription from "./screens/FilmDescription";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import colors from './common/colors';
import ScrollBar from './components/ScrollBar';

// @ts-ignore
export function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 10000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.linear),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug("stop clock", stopClock(clock))),
    state.position,
  ]);
}

const F = () => {
  return (
    <View style={styles.container}>
      <StatusBar style={'auto'} />
      <FilmDescription
        backgroundImage={require('./assets/images/forest.png')}
        title={"Лесной болван"}
        description={"Крутой фильм, просто нет слов"}
        plot={"Жил был Форест, подолжение в фильме!"}
        screenshots={[require('./assets/images/image15.png')]}
        onClick={() => null}
      />
    </View>
  );
}

const Settings = () => {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <ScrollBar />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={colors.purple}
        inactiveColor={colors.incative}
        labeled={false}
        barStyle={{ backgroundColor: '#ffffff' }}
      >
        <Tab.Screen
          name="Home"
          component={F}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Analytics"
          component={View}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcon name="bar-chart" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-settings-outline" color={color} size={26} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
