
import User from '@/app/models/User';
import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import connectDb from '@/app/db/connectDb';
import { signIn } from 'next-auth/react';
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";




export const authoptions = NextAuth({

    providers: [
        GithubProvider ({
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        DiscordProvider({
          clientId: process.env.DISCORD_CLIENT_ID,
          clientSecret: process.env.DISCORD_CLIENT_SECRET
        }),
    ],


    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
    
          
           if(account.provider === "github" || account.provider === "google" || account.provider === "discord") {
            await connectDb()
    
            const currentUser = await User.findOne({ email: email })
            
            if (!currentUser) {
              const newUser = await User.create({
                email: user.email,
               name: user.email.split("@")[0],
              })
              
            }
            
           return true
          }
        },
        async session({ session, user, token }) {
          const dbUser = await User.findOne({ email: session.user.email })
          console.log(dbUser)
          session.user.name = dbUser.name
          return session
        }
      }     

});

export { authoptions as GET, authoptions as POST }