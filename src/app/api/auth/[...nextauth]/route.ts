import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbClient } from "@/lib/dbClient";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  session: { strategy: "jwt" }, // or "database"
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await dbClient.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!user) throw new Error("User not found");

        const isValid = await bcrypt.compare(
          credentials!.password,
          user.password
        );
        if (!isValid) throw new Error("Password incorrect");

        return { id: user.id, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/sign-in", // custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
