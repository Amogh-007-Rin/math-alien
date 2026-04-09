"use client"
import { useState } from "react"

export default function SignIn(){

    const [email,setEmail] = useState<string | null>("");
    const [password, setPassword] = useState<string | null>("");
    const [phoneNumber, setPhoneNumber] = useState<string | null>("");

    console.log(email, password, phoneNumber);

    return(
        <div className="flex justify-center items-center w-full h-full">
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="email" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <input type="email" placeholder="phonenumber" onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
    )
}