import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  //#region Modal Settings
  function showAddGoalModal() {
    setModalIsVisible(true);
  }

  function closeAddGoalModal() {
    setModalIsVisible(false);
  }
  //#endregion

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#a98dee"
          onPress={showAddGoalModal}
        />
        {modalIsVisible && (
          <GoalInput
            showModal={modalIsVisible}
            closeModal={closeAddGoalModal}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
