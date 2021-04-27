import React, {Component} from "react";
import {Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity} from "react-native";

export interface AromasProps {
  icon: ImageSourcePropType;
  name: string;
  count: number;
  onClick: () => null;
}

export class Aromas extends Component<AromasProps, {}> {
  render() {
    return (
      <TouchableOpacity
        style={styles.background}
        onPress={this.props.onClick}
      >
        <Image source={this.props.icon} style={styles.icon}/>
        <Text style={styles.title}>{this.props.name}</Text>
        <Text style={styles.info}>{`${this.props.count} запахов`}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    alignItems: "center"
  },
  icon: {
    width: 100,
    height: 100
  },
  title: {
    color: '#000',
  },
  info: {

  }
});
