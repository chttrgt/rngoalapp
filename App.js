import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

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
    setEnteredGoalText("");
  }
  //#endregion

  //#region TextInput Method
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  //#endregion

  //#region Add New Goal
  function addNewGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        id: Math.random().toString(),
        title: enteredGoalText,
      },
    ]);
    setEnteredGoalText("");
    closeAddGoalModal();
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
            enteredGoalText={enteredGoalText}
            goalInputHandler={goalInputHandler}
            newGoal={addNewGoalHandler}
          />
        )}
        <GoalItem goalsData={courseGoals} setGoalsData={setCourseGoals} />
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
