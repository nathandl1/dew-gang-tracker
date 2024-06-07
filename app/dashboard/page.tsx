'use client'
import React from 'react'
import {Tabs, Tab, Card, CardBody, Image} from "@nextui-org/react";
import NextImage from "next/image";

export default function DashboardPage() {
  return (
    <div className='flex flex-col'>
      <div className='text-center'>
        <h1 className='text-3xl text-white'>Welcome to the Home Page!</h1>
        <p className='text-white'>You can find more information on our pages with the tabs below! If you know where you&apos;re going, feel free to use the menu bar instead.</p>
      </div>
      <div>
        <Tabs aria-label="Options">
          <Tab key="calendar" title="Calendar">
            <Card>
              <CardBody className='text-lg'>
                The Calendar is a customizeable calendar that is designed to allow you apply filters such as Birthdays and Events
                to find information about a NPC&apos;s favorite gift or when a certain event may start! 
                <strong>Click the Calendar button on the left to navigate to the page!</strong>
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
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="fishmap" title="FishMap">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}
