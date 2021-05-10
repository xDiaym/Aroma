import { StatusBar } from 'expo-status-bar';
import React, { createContext } from 'react';
import { StyleSheet, View } from 'react-native';
import FilmDescription from "./screens/FilmDescription";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import colors from './common/colors';
import ScrollBar from './components/HorizontalSlider';

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
      <ScrollBar
        colors={[
          '#FF0000B2',
          '#FFF500B2',
          '#00FF29B2',
          '#00E0FFB2',
          '#0500FFB2',
          '#BD00FFB2',
          '#FF0000B2'
        ]}
        onColorChange={(color) =>
          console.log((color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff)
        }
      />
    </View>
  );
}

const defaultState = {
  "backlight": {
    "color": 123456,
    "brightness": 0.5,
    "enabled": true
  },
  "spraying": {
    "distance": "medium",
    "radius": "medium"
  },
  "autodisabe": {
    "after": 60 // 60 sec
  }
};
export const AromaState = createContext(defaultState);


const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <AromaState.Provider value={defaultState}>
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
    </AromaState.Provider>
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
