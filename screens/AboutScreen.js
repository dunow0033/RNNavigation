import React, { useState, Component, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useLayoutEffect } from 'react';

export default function AboutScreen({ navigation, route }) {

  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name
    });
  }, [navigation, name]);

  // const [onLoadText, setText] = useState("");

  // const onScreenLoad = () => {
  //   setText(getText());
  // }

  // useEffect(() => {
  //   alert("You are logging in!!");
  // }, [])

  // const handleLogout = () => {
  //     let proceed = confirm("Are you sure you want to logout?");
  //     if(proceed)
  //       navigation.navigate("Home");
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello { route.params?.name }, you are logged in!!</Text>
      {/* <Button
        title="Update the name"
        onPress={() => navigation.setParams({ name: "Bridude!!" })} 
      /> */}
      <Button
        title="Logout"
        onPress={() => navigation.navigate("Home")}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});