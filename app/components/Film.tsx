import React, {Component} from "react";
import {Image, ImageSourcePropType, StyleSheet, Text, View} from "react-native";

export interface FilmProps {
  name: string;
  genre: string;
  year: number;
  rate: number;
  previewSource: ImageSourcePropType
}

export class Film extends Component<FilmProps, any> {
  render() {
    return (
      <View>
        <View style={styles.rate}>
          <Text style={styles.rateText}>{this.props.rate}</Text>
        </View>
        <Image
          style={styles.preview}
          source={this.props.previewSource}
        />
        <View>
          <Text style={styles.title}>{this.props.name}</Text>
          <Text style={styles.info}>{`${this.props.year}, ${this.props.genre}`}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rate: {
    position: 'relative',
    backgroundColor: '#5fb25e',
    borderRadius: 2,
    paddingHorizontal: 4,
    top: -16,
    left: -16,
    zIndex: 2
  },
  rateText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center'
  },
  preview: {
    width: 135,
    height: 200,
    borderRadius: 16,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    color: '#270D47',
  },
  info: {
    fontWeight: "500",
    fontSize: 16,
    color: '#CDC7D6',
  }
});

