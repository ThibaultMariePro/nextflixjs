import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import GoogleIcon from "../../../public/images/google-icon.svg"
import Image from "next/image";

export default function SignUp() {
    return (
        <div className="mt-24 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
            <form>
                <h1 className="text-center text-3xl font-semibold text-white">Sign Up</h1>
                <div className="space-y-4 mt-5">
                    <Input
                        type="email" 
                        name="email"
                        placeholder="Email"
                        className="bg-[#333] border-none placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
                        />
                    <Button 
                        type="submit"
                        className="w-full bg-orange-600">Sign Up</Button>
                </div>
            </form>
            
            <div className="text-gray-400 mt-2 text-sm">
                Already have an account? {" "}
                <Link className="text-orange-600 hover:underline " href="/login">Login Now</Link>
            </div>

            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <Button variant="outline" size="icon">
                    <GithubIcon className="w-4 h-4"/>
                </Button>
                <Button variant="outline" size="icon">
                    <Image src={GoogleIcon} alt="Google Icon" className="w-4 h-4" />
                </Button>
            </div>

        </div>
    );
}