import {FlatList, Image, ImageSourcePropType, StyleSheet, Text, View} from "react-native";
import {Button} from "../components/Button";
import React from "react";
import Rating from "../components/Rating";
import AgeRestrictBadge from "../components/AgeRestrictBadge";

interface FilmDescriptionProps {
  backgroundImage: ImageSourcePropType;
  title: string;
  description: string;
  plot: string;
  onClick: () => null;
  screenshots: ImageSourcePropType[];
}

export default ({ backgroundImage, title, description, onClick, plot }: FilmDescriptionProps) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={backgroundImage}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <AgeRestrictBadge ageRestrict={16} />
        </View>
        <Text style={styles.regularText}>{description}</Text>
        {/* FIXME: move rating */}
        <Rating plot={10} total={3.2222} entertainment={10} directing={9} aromas={2} />
        <Button title={'Тык!'} onPress={onClick}/>
        <Text style={styles.subTitle}>Сюжет</Text>
        <Text style={styles.regularText}>{plot}</Text>
      </View>
    </View>
  );
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
  header: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    color: '#270D47',
    paddingRight: 16
  },
  subTitle: {
    fontWeight: "500",
    fontSize: 26,
    color: '#270D47'
  },
  regularText: {
    fontSize: 14,
    color: "#270D47"
  },
  description: {
    marginBottom: 16
  }
});

