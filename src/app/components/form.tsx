import { useState } from "react";
import { Keyboard, Pressable, StyleSheet, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/src/constants/colors";
import { prismaClient } from "@/src/services/database";

export function FormTaskComponent() {
  const [task, setTask] = useState<string>("");

  async function handleAddNewTask() {
    if (task === "") return;

    await prismaClient.task.create({
      data: { name: task, isCompleted: false },
    });

    setTask("");
    Keyboard.dismiss();
  }

  return (
    <View style={s.container}>
      <View style={s.inputContainer}>
        <TextInput
          style={s.inputText}
          placeholder="Digite sua próxima tarefa"
          placeholderTextColor={Colors.grayLight}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
      </View>
      <Pressable onPress={handleAddNewTask}>
        <MaterialIcons name="add" size={27} color={Colors.foreground} />
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    height: 50,
    flex: 1,
  },
  inputText: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
    color: Colors.foreground,
  },
});
