import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import React from "react";

const { width: WIDTH } = Dimensions.get("window")
const MARGIN = 12;
const SIZE = WIDTH / 2 - 2 * MARGIN;

export interface CardProps {
  iconName: string;
  title: string;
  amount: number;
}

export default ({ iconName, title, amount }: CardProps) => {
  const format = (count: number): string => {
    if (!(11 <= count && count <= 14) && [1, 2, 3, 4].includes(count % 10)) {
      return `${count} запаха`;
    }
    return `${count} запахов`;
  };
  return (
    <View style={styles.background}>
      <Icon name={iconName} color={'#8B61DF'} size={SIZE / 4} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>{format(amount)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: SIZE,
    height: SIZE,
    backgroundColor: '#ffffff',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    elevation: 4,
    margin: MARGIN
  },
  icon: {
    paddingTop: '25%',
  },
  title: {
    color: '#270D47',
    fontFamily: "Roboto-Regular",
    fontWeight: "500",
    fontSize: 17,
    paddingTop: '8%',
    flex: 1
  },
  amount: {
    color: "#270D47",
    fontFamily: "Rubik-Regular",
    fontWeight: "300",
    fontSize: 14,
    paddingBottom: '8%'
  }
});
