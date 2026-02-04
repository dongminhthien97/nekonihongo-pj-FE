type EnvKey = "VITE_API_URL";

const REQUIRED_ENV: EnvKey[] = ["VITE_API_URL"];

const missingKeys: EnvKey[] = [];

const getRawEnv = (key: EnvKey): string | undefined => {
  const value = import.meta.env[key];
  if (!value) {
    missingKeys.push(key);
  }
  return value;
};

export const env = {
  apiUrl: getRawEnv("VITE_API_URL") ?? "",
};

export const isEnvValid = (): boolean => missingKeys.length === 0;

export const getMissingEnvKeys = (): EnvKey[] => [...new Set(missingKeys)];
