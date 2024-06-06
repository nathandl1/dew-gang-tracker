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

  const changeSeason = (newSeason:string) =>{
    setSeason(newSeason);
  }

  return (
    <div>
      Calendar Page
      <div>
        <Button onClick={toggleBday}>Toggle Birthdays</Button>
        <Button onClick={toggleEvent}>Toggle Events</Button>
        <Dropdown>
          <DropdownTrigger>
            <Button 
              color="secondary" variant='shadow' 
            >
              {season}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" onAction={(key) => changeSeason(key.toString())}>
            <DropdownItem key="Spring">Spring</DropdownItem>
            <DropdownItem key="Summer">Summer</DropdownItem>
            <DropdownItem key="Fall">Fall</DropdownItem>
            <DropdownItem key="Winter">Winter</DropdownItem>
          </DropdownMenu>
      </Dropdown>
      </div>
      <br/>
      <Calendar  birthday={birthday} event={event} season={season}/>
    </div>
  )
}
