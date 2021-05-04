import React from "react";
import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";
import "../common/styles";
import { AromaCircle, AromaCircleProps } from "../components/AromaCircle";
import defaultStyle from "../common/styles";


interface MeditationDescriptionProps {
  backgroundImage: ImageSourcePropType;
  title: string;
  description: string;
  onClick: () => null;
  aromas: AromaCircleProps[];
}

export class MeditationDescription extends React.Component<MeditationDescriptionProps> {
  render() {
    return (
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={this.props.backgroundImage}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
          <Button title={'Запустить'} onPress={this.props.onClick} />
          <Text style={styles.subTitle}>Запахи</Text>
          <FlatList
            horizontal
            data={this.props.aromas}
            renderItem={({ item }) => (
              <View style={{ paddingHorizontal: 16 }}>
                <AromaCircle image={item.image} name={item.name} />
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    justifyContent: "flex-start",
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  content: {
    position: "relative",
    height: '100%',
    top: -15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#F4F6FC',
    padding: 16,
  },
  title: {
    ...defaultStyle.text,
    fontSize: 34,
    paddingBottom: 15,
  },
  subTitle: {
    ...defaultStyle.text,
    fontSize: 26,
  },
  description: {
    ...defaultStyle.text,
    marginBottom: 27,
  }
});

