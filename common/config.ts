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
} as const;
