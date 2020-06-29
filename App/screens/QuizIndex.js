import React from "react";
import { ScrollView,Text, StatusBar,ImageBackground,StyleSheet,Dimensions } from "react-native";

import questions from "../data/data";

import { RowItem } from "../components/RowItem";
import {Button} from "../components/Button";
const image = require('../assets/image.jpg');
const buttonColor = '#4a148c';
export default ({ navigation }) => (
  <ImageBackground style={styles.container} source={image} blurRadius={1}>
    <Text style={styles.headerText}>KimBoo</Text>
    <RowItem
      name="KimBoo"
      color="#fff"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Sorular",
          headerShown:false,
          questions: questions,
          color: "#4a148c"
        })
      }
    />
  </ImageBackground>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  headerText: {
    fontSize: 75,
    color: buttonColor,
    marginTop: 120,
    marginBottom: 150,
    fontFamily: 'serif',
  },
});
