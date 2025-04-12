import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma"; 
import { db } from "./db";
import { openAPI } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "mongodb",
    }),
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        },
        discord: { 
            clientId: process.env.DISCORD_CLIENT_ID as string, 
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string, 
        },
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        },  
    },
    plugins: [openAPI(), nextCookies()]
} satisfies BetterAuthOptions);