import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";
interface BundleProps {
    name: string;
    icon: string;
    iconAltText: string;
    src: string;
    srcAltText: string;
    description: string[];
    reward: string;
    rewardIcon: string;
    add:(text: string) => void;
    remove:(text:string) => void;
    check:(text:string[], id:string) => string[];
}

export default function Bundle({
    name,
    icon,
    iconAltText,
    src,
    srcAltText,
    description,
    reward,
    rewardIcon,
    add,
    remove,
    check
}: BundleProps){
    const [selected, setSelected] = React.useState([""]);
    useEffect(() => {
        setSelected(check(description, name));
    }, []);
    return(
        <Card className = "max-w-[400px]">
            <CardHeader className = "flex gap-3 bg-[#2563eb] justify-center">
                <Image
                    alt={iconAltText}
                    src = {icon}
                    height={36}
                    radius="sm"
                    width={36}
                />
                <div className="flex flex-col">
                    <p className="text-md text-white font-bold">{name}</p>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody className = "flex-row">
                <div style={{ display: 'grid', placeItems: 'center' }}>
                    <Image
                     alt={srcAltText}
                     src = {src}
                     height={125}
                     radius="sm"
                     width={125}
                     />
                </div>
                <div className="ml-5">
                    <CheckboxGroup value={selected} onValueChange={setSelected}>
                        {Array.isArray(description) &&  description.map(item => (
                            <Checkbox key={item +" "+ name} value = {item + " " + name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>event.target.checked?add(item +" "+ name):remove(item +" "+ name)}>
                                <div className="flex items-center">
                                    <Image src={`/icons/24px-${item}.png`} alt={item} height={24} width={24} />
                                    <span className="ml-2">{item}</span>
                                </div>
                            </Checkbox>
                        ))}
                    </CheckboxGroup>
                </div>
            </CardBody>
            <Divider/>
            <CardFooter className={selected.length === description.length + 1 ? "bg-success" : "bg-white"}>
                <div className="flex items-center m-auto">
                    <Image src = {rewardIcon} alt = {reward} height={24} width={24}/>
                    <p className="ml-2">{reward}</p>
                </div>
            </CardFooter>
        </Card>
    )
}

