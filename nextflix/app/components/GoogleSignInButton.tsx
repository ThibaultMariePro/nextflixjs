'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleIcon from "../../public/images/google-icon.svg"
import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
    return (
        <Button onClick={()=>{signIn('google')}} variant="outline" size="icon">
        <Image src={GoogleIcon} alt="Google Icon" className="w-4 h-4" />
    </Button>
    )
}