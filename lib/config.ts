type Config = {
  resumeUrl: string;
};

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    console.log(`Missing environment variable: ${name}`);
  }
  return value || "";
}

export const config: Config = {
  resumeUrl: getEnvVar("NEXT_PUBLIC_RESUME_URL")
};
