import { prismaClient } from "@/src/services/database";
import { FlatList, Text, View } from "react-native";
import { ITask, TaskItem } from "./taskItem";

export function TaskListComponent() {
  const tasks: ITask[] = prismaClient.task.useFindMany();
  console.log(tasks);

  return (
    <View style={{ width: "100%", flex: 1, marginTop: 32 }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <TaskItem task={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
}
