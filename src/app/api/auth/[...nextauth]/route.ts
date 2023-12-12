import NextAuth from "next-auth/next"
import Google from "next-auth/providers/google"
import Email from "next-auth/providers/email"
import KeycloakProvider from "next-auth/providers/keycloak"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
            ? [
                  Google({
                      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
                      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
                  }),
              ]
            : []),
        Email({
            server: process.env.EMAIL_SERVER ?? "",
            from: process.env.EMAIL_FROM ?? "",
        }),
        ...(process.env.KEYCLOAK_CLIENT_ID && process.env.KEYCLOAK_CLIENT_SECRET
            ? [
                  KeycloakProvider({
                      clientId: process.env.KEYCLOAK_CLIENT_ID ?? "",
                      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET ?? "",
                      issuer: process.env.KEYCLOAK_ISSUER,
                  }),
              ]
            : []),
    ],
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
