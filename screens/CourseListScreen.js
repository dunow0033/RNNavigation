import { View, Text, StyleSheet, Button } from "react-native";

const CourseListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Course List</Text>
    </View>
  );
};

export default CourseListScreen;

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