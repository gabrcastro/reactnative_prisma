import { SafeAreaView, Text, View } from "react-native";
import { FormTaskComponent } from "./components/form";
import { Colors } from "../constants/colors";
import { TaskListComponent } from "./components/taskList";
import Constants from "expo-constants";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Constants.statusBarHeight + 10,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        width: "100%",
        paddingVertical: 32,
        paddingHorizontal: 24,
        backgroundColor: Colors.background,
      }}
    >
      <TaskListComponent />
      <View style={{ marginVertical: 10 }} />
      <FormTaskComponent />
    </SafeAreaView>
  );
}
