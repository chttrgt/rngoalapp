import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Pressable,
  Platform,
} from "react-native";

const GoalItem = ({ goalsData, setGoalsData }) => {
  const handleDeleteTheItem = (_id) => {
    setGoalsData((currentGoals) => {
      return currentGoals.filter((item) => item?.id !== _id);
    });
  };
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goalsData}
        renderItem={({ item }) => {
          return (
            <View style={styles.goalItem}>
              <Pressable
                android_ripple={{ color: "#c5b3f3" }}
                onPress={() => handleDeleteTheItem(item?.id)}
                style={({ pressed }) =>
                  pressed && Platform.OS === "ios" && styles.pressedItem
                }
              >
                <Text style={styles.goalText}>{item?.title}</Text>
              </Pressable>
            </View>
          );
        }}
        keyExtractor={(item, _) => item?.id}
        contentContainerStyle={styles.emptyTextContainer}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Your list is EMPTY!</Text>
        )}
      />
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    overflow: "hidden",
  },
  pressedItem: {
    backgroundColor: "#c5b3f3",
  },
  goalText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "400",
    padding: 11,
  },
  emptyTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  emptyText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
  },
});
