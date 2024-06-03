'use client'
import React from 'react'
import {Tabs, Tab, Card, CardHeader, CardBody, Divider, Image, CheckboxGroup, Checkbox} from "@nextui-org/react";
import Bundle from '@/app/components/bundle';
import CraftsRoom from "./CraftsRoom"
import Pantry from "./Pantry"
import FishTank from "./FishTank"
import BoilerRoom from "./BoilerRoom"
import BulletinBoard from "./BulletinBoard"
import Vault from "./Vault"
export default function BundlesPage() {
  const missingdescription: string[] = ["Wine", "Dinosaur Mayonnaise", "Prismatic Shard", "Ancient Fruit", "Void Salmon", "Caviar"];
  return (
    <Tabs aria-label="Options" color={'primary'} fullWidth = {true}>
      <Tab key="Crafts Room" title="Crafts Room">
        <Card style={{ height: '88dvh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex md:flex-row'>
              <Image
                alt = "Incomplete Crafts Room" 
                src = "/Images/Community_Center_Crafts_Room.png"
              />
              <Image
                alt = "Finished Crafts Room" 
                src = "/Images/Finished_Crafts_Room.png"
              />
            </div>
            <div className='m-auto flex flex-col md:flex-row'>
              {CraftsRoom.map((bundle,index) =>(
                <div key = {index} className = "m-2">
                  <Bundle
                    name= {bundle.name}
                    icon= {bundle.icon}
                    iconAltText= {bundle.iconAltText}
                    src= {bundle.src}
                    srcAltText= {bundle.srcAltText}
                    description= {bundle.description}
                    rewardIcon= {bundle.rewardIcon}
                    reward= {bundle.reward}
                  ></Bundle>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>  
      </Tab>
      <Tab key="Pantry" title="Pantry">
        <Card style={{ height: '88dvh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex md:flex-row'>
              <Image
                alt = "Incomplete Pantry" 
                src = "/Images/Community_Center_Pantry.png"
              />
              <Image
                alt = "Finished Pantry" 
                src = "/Images/Finished_Pantry.png"
              />
            </div>
            <div className='m-auto flex flex-col md:flex-row'>
              {Pantry.map((bundle,index) =>(
                <div key = {index} className = "m-2">
                  <Bundle
                    name= {bundle.name}
                    icon= {bundle.icon}
                    iconAltText= {bundle.iconAltText}
                    src= {bundle.src}
                    srcAltText= {bundle.srcAltText}
                    description= {bundle.description}
                    rewardIcon= {bundle.rewardIcon}
                    reward= {bundle.reward}
                  ></Bundle>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Fish Tank" title="Fish Tank">
        <Card style={{ height: '88dvh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex md:flex-row'>
              <Image
                alt = "Incomplete Fish Tank" 
                src = "/Images/Community_Center_Fish_Tank.png"
              />
              <Image
                alt = "Finished Fish Tank" 
                src = "/Images/Finished_Fish_Tank.png"
              />
            </div>
            <div className='m-auto flex flex-col md:flex-row'>
              {FishTank.map((bundle,index) =>(
                <div key = {index} className = "m-2">
                  <Bundle
                    name= {bundle.name}
                    icon= {bundle.icon}
                    iconAltText= {bundle.iconAltText}
                    src= {bundle.src}
                    srcAltText= {bundle.srcAltText}
                    description= {bundle.description}
                    rewardIcon= {bundle.rewardIcon}
                    reward= {bundle.reward}
                  ></Bundle>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Boiler Room" title="Boiler Room">
        <Card style={{ height: '88dvh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex md:flex-row'>
              <Image
                alt = "Incomplete Boiler Room" 
                src = "/Images/Community_Center_Boiler_Room.png"
              />
              <Image
                alt = "Finished Boiler Room" 
                src = "/Images/Finished_Boiler_Room.png"
              />
            </div>
            <div className='m-auto flex flex-col md:flex-row'>
              {BoilerRoom.map((bundle,index) =>(
                <div key = {index} className = "m-2">
                  <Bundle
                    name= {bundle.name}
                    icon= {bundle.icon}
                    iconAltText= {bundle.iconAltText}
                    src= {bundle.src}
                    srcAltText= {bundle.srcAltText}
                    description= {bundle.description}
                    rewardIcon= {bundle.rewardIcon}
                    reward= {bundle.reward}
                  ></Bundle>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Bulletin Board" title="Bulletin Board">
        <Card style={{ height: '88dvh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex md:flex-row'>
              <Image
                alt = "Incomplete Bulletin Board" 
                src = "/Images/Community_Center_Bulletin_Board.png"
              />
              <Image
                alt = "Finished Bulletin Board" 
                src = "/Images/Finished_Bulletin_Board.png"
              />
            </div>
            <div className='m-auto flex flex-col md:flex-row'>
              {BulletinBoard.map((bundle,index) =>(
                <div key = {index} className = "m-2">
                  <Bundle
                    name= {bundle.name}
                    icon= {bundle.icon}
                    iconAltText= {bundle.iconAltText}
                    src= {bundle.src}
                    srcAltText= {bundle.srcAltText}
                    description= {bundle.description}
                    rewardIcon= {bundle.rewardIcon}
                    reward= {bundle.reward}
                  ></Bundle>
                </div>
              ))}
            </div>
          </CardBody>
        </Card> 
      </Tab>
      <Tab key="Vault" title="Vault">
        <Card style={{ height: '88dvh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex md:flex-row'>
              <Image
                alt = "Incomplete Vault" 
                src = "/Images/Community_Center_Vault.png"
              />
              <Image
                alt = "Finished Bulletin Board" 
                src = "/Images/Finished_Vault_Room.png"
              />
            </div>
            <div className='m-auto flex flex-col md:flex-row'>
              {Vault.map((bundle,index) =>(
                <div key = {index} className = "m-2">
                  <Bundle
                    name= {bundle.name}
                    icon= {bundle.icon}
                    iconAltText= {bundle.iconAltText}
                    src= {bundle.src}
                    srcAltText= {bundle.srcAltText}
                    description= {bundle.description}
                    rewardIcon= {bundle.rewardIcon}
                    reward= {bundle.reward}
                  ></Bundle>
                </div>
              ))}
            </div>
          </CardBody>
        </Card> 
      </Tab>
      <Tab key="Abandoned JojaMart" title="Abandoned JojaMart">
        <Card style={{ height: '88dvh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex md:flex-row'>
              <Image
                alt = "Abandoned JojaMart" 
                src = "/Images/590px-JojaMart_Abandoned.png"
              />
            </div>
            <div className='m-auto flex flex-col md:flex-row'>
              <Card className = "max-w-[400px]">
                <CardHeader className = "flex gap-3 bg-[#2563eb] justify-center">
                  <Image
                      alt="Purple Bundle"
                      src = "/icons/32px-Bundle_Purple.png"
                      height={36}
                      radius="sm"
                      width={36}
                  />
                  <div className="flex flex-col">
                    <p className="text-md text-white font-bold">The Missing Bundle</p>
                  </div>
                </CardHeader>
                <Divider/>
                <CardBody className = "flex-row">
                  <div style={{ display: 'grid', placeItems: 'center' }}>
                    <Image
                     alt="The Missing Bundle"
                     src = "/Images/The_Missing_Bundle.png"
                     height={125}
                     radius="sm"
                     width={125}
                     />
                  </div>
                  <div className="ml-5">
                    <CheckboxGroup>
                        {Array.isArray(missingdescription) &&  missingdescription.map(item => (
                            <Checkbox key={item} value={item}>
                                <div className="flex items-center">
                                    <Image src={`/icons/24px-${item}.png`} alt={item} height={24} width={24} />
                                    <span className="ml-2">{item}</span>
                                </div>
                            </Checkbox>
                        ))}
                    </CheckboxGroup>
                  </div>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>  
      </Tab>
    </Tabs>
  )
}
