import React from "react";
import {Component} from "react";
import {Image, ImageSourcePropType, StyleSheet, Text, View} from "react-native";
import Accordion from "react-native-collapsible/Accordion";

const SECTIONS = [
  {
    title: 'Connection',
    icon: require('../assets/connection.png'),
  },
  {
    title: 'Connection #2',
    icon: require('../assets/connection.png'),
  },
];

export interface SettingsHeader {
  icon: ImageSourcePropType;
  title: string;
}

interface SettingsState {
  activeSections: { content: string, title: string }[],
}

export class Settings extends Component<{}, SettingsState> {
  state = {
    activeSections: [],
  };

  _renderHeader = (section: SettingsHeader) => {
    return (
      <View style={styles.header}>
        <View style={styles.headerIconBackground}>
          <Image style={{width: 24, height: 24}} source={section.icon}/>
        </View>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = (_: any) => {
    return (
      <View>
        <Text>Lorem ipsum dolor sit amet!</Text>
      </View>
    );
  };

  _updateSections = (activeSections: any) => {
    this.setState({activeSections});
  };

  render() {
    return (
      <View style={{width: '100%'}}>
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 64,
    padding: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  headerIconBackground: {
    backgroundColor: '#EFE8FF',
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 17,
    fontWeight: "500",
    color: '#000',
    paddingLeft: 16
  }
});
