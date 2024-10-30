import { Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Colors } from "@/src/constants/colors";

export interface ITask {
  id: number;
  name: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export function TaskItem({ task }: { task: ITask }) {
  const [checked, setChecked] = useState(false);

  return (
    <View
      style={{
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
      }}
    >
      <Checkbox
        value={checked}
        onValueChange={(value) => setChecked(value)}
        color={Colors.primary}
      />
      <Text style={{ fontSize: 18 }}>{task.name}</Text>
    </View>
  );
}
