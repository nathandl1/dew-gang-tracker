'use client'
import React from 'react'
import {Tab, Card, CardBody, Image} from "@nextui-org/react";
import NextImage from "next/image";
import {MyTabs} from "@/app/components/MyTabs"

export default function DashboardPage() {
  return (
    <div className='flex flex-col'>
      <div className='text-center'>
        <h1 className='text-3xl text-white'>Welcome to the Home Page!</h1>
        <p className='text-white'>You can find more information on our pages with the tabs below! If you know where you&apos;re going, feel free to use the menu bar instead.</p>
      </div>
      <div>
        <MyTabs aria-label="Options" size="xl">
          <Tab key="calendar" title="Calendar">
            <Card>
              <CardBody className='text-lg'>
                The Calendar is a customizeable calendar that is designed to allow you apply filters such as Birthdays and Events
                to find information about a NPC&apos;s favorite gift or when a certain event may start! 
                <strong>Select the Calendar Page at the top menu to navigate there!</strong>
                <div>
                  <Image 
                    isBlurred
                    as={NextImage}
                    height={200}
                    width={800}
                    alt='Stardew Valley Calendar Example'
                    src='/icons/Calendar_Spring.png'
                  />
                </div>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="bundles" title="Bundles">
            <Card>
              <CardBody className='text-lg'>
                The Bundles page is designed to help you with your collection journey through the community center! <br/>
                Here you'll find a checklist of all the items you'll need for each bundle within each room. Plus the reward you can receive when you complete the bundle! <br/>
                <strong>Select the Bundles Page at the top menu to navigate there!</strong>
                <Image src='/Images/Community_Center.png' alt=''></Image>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="fishmap" title="Fish Finder">
            <Card>
              <CardBody className='text-lg'> 
                The Fish Finder is a tool designed to help you find out what fish you can catch during your current season, weather, and time! <br/>
                You can select the season, weather, and use the Time slider to find out what fish are currently available and where you can catch them<br/>
                <strong>Select the Fish Finder at the top menu to navigate there!</strong>
                <Image src='/Fish_Map.png' alt=''/>
              </CardBody>
            </Card>  
          </Tab>
        </MyTabs>
      </div>
    </div>
  )
}
