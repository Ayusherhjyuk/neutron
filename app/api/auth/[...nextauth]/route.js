import User from '@/app/models/User';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import connectDb from '@/app/db/connectDb';

const authoptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
    // Add other custom pages as needed
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github" || account.provider === "google" || account.provider === "discord") {
        await connectDb();

        const currentUser = await User.findOne({ email });

        if (!currentUser) {
          await User.create({
            email: user.email,
            name: user.email.split("@")[0],
          });
        }

        return true;
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) {
        session.user.name = dbUser.name;
      }
      return session;
    }
  },
  // Generate static params for dynamic API route
  generateStaticParams: async () => {
    await connectDb();
    const users = await User.find(); // Fetch all users or relevant data
    const params = users.map(user => ({
      params: { email: user.email } // Generate params based on user data
    }));
    return {
      paths: params,
      fallback: false // Set to true if using fallback for ISR
    };
  }
};

// Export NextAuth handler with options
export default (req, res) => NextAuth(req, res, authoptions);
