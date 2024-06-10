'use client'
import React from 'react'
import Calendar from './calendar'
import { useState } from 'react'
import { MyButton } from '@/app/components/MyButton'
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
      <div className='flex'>
        <MyButton onClick={toggleBday} size='xl'>Toggle Birthdays</MyButton>
        <MyButton onClick={toggleEvent} size='xl'>Toggle Events</MyButton>
        <Dropdown>
          <DropdownTrigger>
            <MyButton 
              color="secondary" variant='shadow' size='xl' 
            >
              {season}
            </MyButton>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" onAction={(key) => changeSeason(key.toString())}>
            <DropdownItem key="Spring" className=''>Spring</DropdownItem>
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
