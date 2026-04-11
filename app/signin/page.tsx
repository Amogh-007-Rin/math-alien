"use client"

import AuthButton from "@/components/AuthButton"
import ProvidersButton from "@/components/ProvidersButton";
import SingInTable from "@/components/SignInTable";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Singin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    return (
        <div className="w-full h-screen flex">
            <div className="h-screen w-[60%]">
                <div className="h-screen w-full bg-[url('/images/background.jpg')] bg-cover bg-center">

                </div>
            </div>
            <div className="h-screen w-[40%] bg-black text-white flex flex-col justify-center items-center">
                <div className=" w-[60%] h-[20%] flex-col justify-center items-center mx-5">
                    <h2>SIGN IN</h2>
                    <h6>Sign in with your credentials</h6>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 w-[60%] h-[20%]">
                    <SingInTable></SingInTable>
                </div>
                <div className="w-[60%] h-[20%] flex flex-col">
                    <p>Or continue with open account</p>
                    <div className=" w-full h-full flex justify-evenly items-center">
                        <ProvidersButton label="google" providersOptions="google"/>
                        <ProvidersButton label="facebook" providersOptions="facebook"/>
                        <ProvidersButton label="github" providersOptions="github"/>
                        <ProvidersButton label="instagram" providersOptions="instagram"/>
                    </div>
                </div>
            </div>
        </div>
    )
}