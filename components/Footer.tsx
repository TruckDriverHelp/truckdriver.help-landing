import Logo from "../public/logo.png";
import { LuCopyright } from "react-icons/lu";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";

export default function Footer({}){
    return (
        <footer className="w-full bottom-0">
            <div className="p-10 w-full bg-gray text-gray-text flex justify-center">
                <div className="w-2/3 flex flex-row justify-around items-center">
                    <div className="flex flex-col pr-8 max-w-96 [&>*]:py-3">
                        <Image src={Logo} alt="TruckDriver.help" width={150} height={50}/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis pariatur optio obcaecati repellat tenetur sapiente, similique quibusdam magni! Consequuntur, nesciunt.</p>
                        <div className="flex flex-row [&>*]:mx-2">
                            <FaFacebook />
                            <BsTelegram />
                            <AiFillTwitterCircle />
                            <IoLogoYoutube />
                        </div>
                    </div>
                <div>
                    <h2 className="pb-2"><strong>Category</strong></h2>
                    <ul className="[&>*]:py-0.5">
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="pb-2"><strong>Category</strong></h2>
                    <ul className="[&>*]:py-0.5">
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div><div>
                    <h2 className="pb-2"><strong>Category</strong></h2>
                    <ul className="[&>*]:py-0.5">
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div><div>
                    <h2 className="pb-2"><strong>Category</strong></h2>
                    <ul className="[&>*]:py-0.5">
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="text-center text-gray-text h-14 flex flex-row justify-center items-center bg-white">
                <LuCopyright className="mx-2"/>
                <p>2023 TruckDriver.Help. All rights reserved.</p>
            </div>
        </footer>
    )
}