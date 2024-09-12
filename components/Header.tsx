import Button from "./Button"
import Trucks from "../public/trucks.png"
import Image from "next/image"

export default function Header(){
    return(
        <header className="p-0 bg-blue-500 text-primary text-center">
            <div className="flex flex-row items-center justify-between">
                <Image src={Trucks} alt="Trucks" width={500}/>
                <div>
                    <h1 className="text-4xl font-bold">
                        The #1 Job Board For<br/>
                        The Trucking Industry
                    </h1>
                    <p className="text-xl mt-2">
                        Reach 100000+ trained<br/>
                        truckers in the US
                    </p>
                
                    <div className="mt-4 flex flex-row justify-center">
                        <Button text={"See Jobs"}/>
                        <Button text={"Post a Job"} solid={true}/>
                    </div>
                </div>
                <Image src={Trucks} alt="Trucks" width={500} style={{transform: "scaleX(-1)"}}/>
            </div>
            
        </header>       
    )
}