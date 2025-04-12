import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.PUBLIC_BASE_URL,
});