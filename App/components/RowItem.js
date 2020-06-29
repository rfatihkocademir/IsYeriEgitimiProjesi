import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#36B1F0",
    marginBottom: 1
  },
  text: {
    fontSize: 25,
    color: '#fff',
    fontWeight: "600",
    fontFamily:'serif',
  },
  button:{
    borderColor: '#4a148c',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor:'#4a148c',
    width: 200,
    justifyContent:'center',
    alignItems: 'center',
    height: 50,
  }
});

export const RowItem = ({ onPress = () => {}, name, color }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.button}>
      <Text style={styles.text}>PLAY</Text>
  </TouchableOpacity>
);
