import { BuiltInProviderType } from "next-auth/providers/index";
import { LiteralUnion, signIn, SignInOptions } from "next-auth/react"

interface providersButtonProps{
    label: string,
    providersOptions: LiteralUnion<BuiltInProviderType>
}

export default function ProvidersButton({label, providersOptions}: providersButtonProps){
    return(
        <div>
            <button onClick={async () => {
                const res = await signIn(providersOptions)
            }} className="bg-blue-900 w-1/4 h-full text-white">{label}</button>
        </div>
    )
}