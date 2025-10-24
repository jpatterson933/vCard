function getEnvironmentVariable(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

export const config = {
  database: {
    url: getEnvironmentVariable("DATABASE_URL"),
  },
  clerk: {
    publishableKey: getEnvironmentVariable("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"),
    secretKey: getEnvironmentVariable("CLERK_SECRET_KEY"),
  },
} as const;
