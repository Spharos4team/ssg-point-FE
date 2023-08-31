import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        loginId: { label: "LoginId", type: "text" },
        loginPass: { label: "LoginPass", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.loginId || !credentials.loginPass) return null;

        const res = await fetch("http://localhost:3030/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        const user = await res.json();

        if (res.ok && user) {
          console.log(user);
          return user;
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user = token;
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;

      return baseUrl;
    },
  },

  pages: {
    signIn: "/login",
  },
};
