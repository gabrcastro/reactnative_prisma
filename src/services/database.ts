import "@prisma/react-native";
import { PrismaClient } from "@prisma/client/react-native";
import { reactiveHooksExtension } from "@prisma/react-native";

const baseClient = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

export const prismaClient = baseClient.$extends(reactiveHooksExtension());

export async function initializeDabase() {
  try {
    baseClient.$applyPendingMigrations();
  } catch (err) {
    console.log("Failed apply migrations: ", err);
    throw new Error("Failed initialize database");
  }
}
