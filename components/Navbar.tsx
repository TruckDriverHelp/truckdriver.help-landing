import Logo from "../public/logo.png";
import Image from "next/image";
import Button from "./Button";
import { BsTelegram } from "react-icons/bs";
import { IoGlobeSharp } from "react-icons/io5";
import { HiSquares2X2 } from "react-icons/hi2";

export default function Navbar(){
    return (
        <nav>
            <div className="px-32 bg-soft-gray h-16 flex flex-row justify-between items-center">
                <a href="#"><Image src={Logo} alt="TruckDriver.help" width={100} height={40}/></a>
                <div className="flex justify-center">
                    <Button text="Categories" icon={<HiSquares2X2 />}/>
                    <input className="w-[600px] border-solid rounded-md border-gray border-[2px]" placeholder="Search Jobs, Services or Products"/>
                </div>
                <div className="w-auto flex flex-row justify-end">
                    <Button text="Log In" solid={false} />
                    <Button text="Sign up" solid={true} />
                    <Button icon={<IoGlobeSharp />}/>
                </div>
            </div>
        </nav>
    )
}