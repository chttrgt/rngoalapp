import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Platform,
  TextInput,
  View,
  Modal,
} from "react-native";

const GoalInput = ({ showModal, closeModal }) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput placeholder="Your course goal!" style={styles.textInput} />
        <View style={styles.modalButtonsContainer}>
          <View style={styles.modalButtons}>
            <Button title="cancel" color="#f31282" onPress={closeModal} />
          </View>
          <View style={styles.modalButtons}>
            <Button title="Add Goal" color="#9364d1" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#311b6b",
    flex: 1,
    flexDirection: "col",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#6b5c94",
    backgroundColor: "#e4d0ff",
    width: "90%",
    padding: Platform.OS === "android" ? 10 : 15,
    borderRadius: 7,
    color: "#120438",
  },
  modalButtonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalButtons: {
    flex: 0.3,
    height: 70,
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
