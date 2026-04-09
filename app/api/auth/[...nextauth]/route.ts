import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {lable:'email', type: 'text', placeholder: "Enter Your Email"},
                password: { label: 'password', type: 'password', placeholder: '' }
            },
            async authorize(credentials: any){
                return{
                    id: 'user registered'
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export {handler as GET, handler as POST}