import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import Email from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        Email({
            server: process.env.EMAIL_SERVER ?? "",
            from: process.env.EMAIL_FROM ?? "",
        }),
    ],
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}