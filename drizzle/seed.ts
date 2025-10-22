import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

async function seedDatabase() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set in environment variables");
  }
  const client = postgres(connectionString);
  const db = drizzle(client, { schema });

  console.log("Starting database seed...");

  const testUser = await db
    .insert(schema.users)
    .values({
      clerkId: "test_clerk_id_123",
      email: "test@example.com",
    })
    .returning();

  console.log("Created test user:", testUser[0]);

  const testCard = await db
    .insert(schema.cards)
    .values({
      ownerId: testUser[0].id,
      name: "John Doe",
      email: "john@example.com",
      phone: "555-123-4567",
    })
    .returning();

  console.log("Created test card:", testCard[0]);

  console.log("Database seed completed successfully!");

  await client.end();
  process.exit(0);
}

seedDatabase().catch((error) => {
  console.error("Error seeding database:", error);
  process.exit(1);
});
