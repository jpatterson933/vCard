import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "@/common/config";
import * as schema from "@/drizzle/schema";

const connectionString = config.database.url;

const client = postgres(connectionString);

export const db = drizzle(client, { schema });
