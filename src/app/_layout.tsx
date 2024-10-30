import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { initializeDabase } from "../services/database";
import { SafeAreaView, Text } from "react-native";

export default function RootLayout() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    async function setup() {
      await initializeDabase();
      setDbInitialized(true);
    }

    setup();
  });

  if (!dbInitialized) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
