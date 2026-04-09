"use client"
import {signIn, signOut} from "next-auth/react"
export default function Appbar() {
    
    return (
        <div className="flex justify-between w-full bg-black">
            <div className="text-white p-4 mx-4 w-[80%]">
                MATH ALIEN
            </div>
            <div className="flex justify-between w-[20%]">
            <button className="bg-white text-black w-36" onClick={() => signIn()}>SignIn</button>
            <button className="bg-white text-black w-36" onClick={() => signOut()}>LogOut</button>
            </div>
        </div>
    )
}