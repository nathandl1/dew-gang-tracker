'use client'
import React, { useState, useEffect} from 'react'
import {Tab, Card, CardBody, Image} from "@nextui-org/react";
import Bundle from '@/app/components/bundle';
import axios from "axios";
import CraftsRoom from "./CraftsRoom"
import Pantry from "./Pantry"
import FishTank from "./FishTank"
import BoilerRoom from "./BoilerRoom"
import BulletinBoard from "./BulletinBoard"
import Vault from "./Vault"
import {MyTabs} from "@/app/components/MyTabs"


export default function BundlesPage() {
  const [userData, setUserData] = useState<string[]>([]);
  const [userId, setUserId] = useState("");
  const [counter, setCounter] = useState(0);
  const missingdescription: string[] = ["Wine", "Dinosaur Mayonnaise", "Prismatic Shard", "Ancient Fruit", "Void Salmon", "Caviar"];
  const getUserDetails = async() =>{
    try{
      const res = await axios.get('/api/users/user')
      setUserData(res.data.data)
      setUserId(res.data.id)
    }catch (error){
      console.error(error);
    }
  } 
  const saveUserData = async() =>{
    try{
      const response = await axios.post('/api/users/saveCheckmarks', {
        id: userId,
        checkmarks: userData
      })
      console.log(response.data)
    }catch (error){
      console.error(error);
    }
  }
  const addToUserData = (text:string) => {
    setUserData([...userData,text])
  };
  const deleteFromUserData = (text:string) =>{
    setUserData(userData.filter(checkmark => checkmark !== text))
  }
  useEffect(() => {
    getUserDetails();
  }, []);
  useEffect(() => {
    console.log(userData);
    if (counter > 0){saveUserData();}
    setCounter(prevCounter => prevCounter + 1);
  }, [userData]);
  return (
    <MyTabs aria-label="Options" color={'primary'} fullWidth={true} size = "xl">
      <Tab key="Crafts Room" title="Crafts Room">
        <Card style={{ height: '80vh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex flex-col md:flex-row'>
              <Image
                alt = "Incomplete Crafts Room" 
                src = "/Images/Community_Center_Crafts_Room.png"
              />
              <Image
                alt = "Finished Crafts Room" 
                src = "/Images/Finished_Crafts_Room.png"
              />
            </div>
            <div className='m-auto grid md:grid-cols-2 lg:grid-cols-3'>
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
                    userData= {userData}
                    add= {addToUserData}
                    remove= {deleteFromUserData}
                  ></Bundle>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>  
      </Tab>
      <Tab key="Pantry" title="Pantry">
        <Card style={{ height: '80vh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex flex-col md:flex-row'>
              <Image
                alt = "Incomplete Pantry" 
                src = "/Images/Community_Center_Pantry.png"
              />
              <Image
                alt = "Finished Pantry" 
                src = "/Images/Finished_Pantry.png"
              />
            </div>
            <div className='m-auto grid md:grid-cols-2 lg:grid-cols-3'>
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
                    userData = {userData}
                    add={addToUserData}
                    remove={deleteFromUserData}
                  ></Bundle>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Fish Tank" title="Fish Tank">
        <Card style={{ height: '80vh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex flex-col md:flex-row'>
              <Image 
                alt = "Incomplete Fish Tank" 
                src = "/Images/Community_Center_Fish_Tank.png"
              />
              <Image
                alt = "Finished Fish Tank" 
                src = "/Images/Finished_Fish_Tank.png"
              />
            </div>
            <div className='m-auto grid md:grid-cols-2 lg:grid-cols-3'>
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
                    userData = {userData}
                    add={addToUserData}
                    remove={deleteFromUserData}
                  ></Bundle>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Boiler Room" title="Boiler Room">
        <Card style={{ height: '80vh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex flex-col md:flex-row'>
              <Image
                alt = "Incomplete Boiler Room" 
                src = "/Images/Community_Center_Boiler_Room.png"
              />
              <Image
                alt = "Finished Boiler Room" 
                src = "/Images/Finished_Boiler_Room.png"
              />
            </div>
            <div className='m-auto grid md:grid-cols-2 lg:grid-cols-3'>
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
                    userData = {userData}
                    add={addToUserData}
                    remove={deleteFromUserData}
                  ></Bundle>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Bulletin Board" title="Bulletin Board">
        <Card style={{ height: '80vh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex flex-col md:flex-row items-center'>
              <Image
                alt = "Incomplete Bulletin Board" 
                src = "/Images/Community_Center_Bulletin_Board.png"
                width ={652}
                height = {346}
              />
              <Image
                alt = "Finished Bulletin Board" 
                src = "/Images/Finished_Bulletin_Board.png"
                width ={652}
                height = {346}
              />
            </div>
            <div className='m-auto grid md:grid-cols-2 lg:grid-cols-3'>
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
                    userData = {userData}
                    add={addToUserData}
                    remove={deleteFromUserData}
                  ></Bundle>
                </div>
              ))}
            </div>
          </CardBody>
        </Card> 
      </Tab>
      <Tab key="Vault" title="Vault">
        <Card style={{ height: '80vh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto flex flex-col md:flex-row'>
              <Image
                alt = "Incomplete Vault" 
                src = "/Images/Community_Center_Vault.png"
              />
              <Image
                alt = "Finished Bulletin Board" 
                src = "/Images/Finished_Vault_Room.png"
              />
            </div>
            <div className='m-auto grid md:grid-cols-2 lg:grid-cols-4'>
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
                    userData = {userData}
                    add={addToUserData}
                    remove={deleteFromUserData}
                  ></Bundle>
                </div>
              ))}
            </div>
          </CardBody>
        </Card> 
      </Tab>
      <Tab key="Abandoned JojaMart" title="Abandoned JojaMart">
        <Card style={{ height: '80vh' }}>
          <CardBody className='text-lg mt-5'>
            <div className='mx-auto'>
              <Image
                alt = "Abandoned JojaMart" 
                src = "/Images/590px-JojaMart_Abandoned.png"
              />
            </div>
            <div className = "m-auto">
              <Bundle
                name= "The Missing Bundle"
                icon= "/icons/32px-Bundle_Purple.png"
                iconAltText= "Purple Bundle"
                src= "/Images/The_Missing_Bundle.png"
                srcAltText= "The Missing Bundle"
                description= {missingdescription}
                rewardIcon= "/Images/Movie_Theater.png"
                reward= "Movie Theater"
                userData = {userData}
                add={addToUserData}
                remove={deleteFromUserData}
              ></Bundle>
            </div>
          </CardBody>
        </Card>  
      </Tab>
    </MyTabs>
  )
}

