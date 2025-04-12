import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma"; 
import { db } from "./db";
import { openAPI } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "mongodb",
    }),
    plugins: [openAPI(), nextCookies()],
    
} satisfies BetterAuthOptions);