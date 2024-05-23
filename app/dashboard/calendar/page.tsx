'use client'
import React from 'react'
import Calendar from './calendar'
import { useState } from 'react'
import { Button } from '@nextui-org/react';
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";


export default function CalendarPage() {
  const [birthday, setBirthday] = useState(false);
  const [event, setEvent] = useState(false);
  const [season, setSeason] = useState('Spring');
  

  const toggleBday = () =>{
    setBirthday(!birthday);
  }

  const toggleEvent = () =>{
    setEvent(!event);
  }

  const changeSeason = (newSeason) =>{
    setSeason(newSeason);
  }

  return (
    <div>
      Calendar Page
      <div>
        <Button onClick={toggleBday}>BirfDay?</Button>
        <Button onClick={toggleEvent}>Ebent?</Button>
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
            >
              {season}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" onAction={(key) => changeSeason(key)}>
            <DropdownItem key="Spring">Spring</DropdownItem>
            <DropdownItem key="Summer">Summer</DropdownItem>
            <DropdownItem key="Fall">Fall</DropdownItem>
            <DropdownItem key="Winter">Winter</DropdownItem>
          </DropdownMenu>
      </Dropdown>
      </div>
      
      <Calendar  birthday={birthday} event={false} season={season}/>
    </div>
  )
}
