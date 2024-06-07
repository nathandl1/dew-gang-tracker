'use client'
import React, { useState } from 'react'
import {Popover, PopoverTrigger, PopoverContent, Button, Image} from "@nextui-org/react"
interface IconProps {
  name: string;
  loved:string[];
}
export default function Icon({name, loved}:IconProps) {
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(!visible);

  return (
    <div>
      <Image
        src={"/villagers/"+name+".png"}
        alt=""
        onClick={handler}
        style={{ cursor: 'pointer', width: '128px', height: 'auto' }}
      />
      <Popover
        isOpen={visible}
        onClose={() => setVisible(false)}
        placement="bottom"
      >
        <PopoverTrigger>
          <div></div>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            Loved Gifts:
            <ol>
                {loved.map((gift) => {
                    return (
                        <li key={gift}>{gift}</li>
                    )
                })}
            </ol>
          </div>                          
        </PopoverContent>
      </Popover>
    </div>
  )
}