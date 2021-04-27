import {FlatList, StyleSheet, View} from "react-native";
import Card, { CardProps } from "../components/Card";
import React from "react";

interface CardsProps {
  cards: CardProps[];
}


export default ({ cards }: CardsProps) => {
  return (
    <View style={styles.root}>
      <FlatList
        style={styles.list}
        data={cards}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <Card iconName={item.iconName} title={item.title} amount={item.amount} key={index} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    alignItems: "center",
  },
  list: {
    height: '100%',
  }
})


