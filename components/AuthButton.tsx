"use client"

interface AuthButtonProps{
    label: string,
    onclick: () => void
}

export default function AuthButton({label, onclick}: AuthButtonProps){
    return(
        <div className="w-[100px] h-[30px]">
            <button onClick={onclick} className="bg-blue-400 w-full h-full text-white">{label}</button>
        </div>
    )
}