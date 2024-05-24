'use client'
import React from 'react'
import {Image, Button} from "@nextui-org/react";
import Icon from './icon';


export default function Calendar({birthday, event, season}) {
  return (
    <div>
        <div className="grid grid-cols-7 w-7/8">
            <div className='border-2 border-black'>01
                {birthday && season=='Winter' ? <Icon name='Krobus'/> : <></>}
            </div>
            <div className='border-2 border-black'>02
                {birthday && season=='Fall' ? <Icon name="Penny"/> : <></>}
            </div>
            <div className='border-2 border-black'>03
                {birthday && season=='Winter' ? <Icon name='Linus'/> : <></>}
            </div>
            <div className='border-2 border-black'>04
                {birthday && season=='Spring' ? <Icon name="Kent"/> : <></>}
                {birthday && season=='Summer' ? <Icon name='Jas'/> : <></>}
            </div>
            <div className='border-2 border-black'>05
                {birthday && season=='Fall' ? <Image width={128} src='/villagers/Elliott.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>06
                <Image width={128} height={128} src='' alt=''/>
            </div>
            <div className='border-2 border-black'>07
                {birthday && season=='Spring' ? <Icon name="Lewis" /> : <></>}
                {birthday && season=='Winter' ? <Image width={128} src='/villagers/Caroline.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>08
                {birthday && season=='Summer' ? <Image width={128} src='/villagers/Gus.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>09
                <Image width={128} height={128} src='' alt=''/>
            </div>
            <div className='border-2 border-black'>10
                {birthday && season=='Spring' ? <Image width={128} src='/villagers/Vincent.png' alt=''/> : <></>}
                {birthday && season=='Summer' ? <Image width={128} src='/villagers/Maru.png' alt=''/> : <></>}
                {birthday && season=='Winter' ? <Image width={128} src='/villagers/Sebastian.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>11
                {birthday && season=='Fall' ? <Image width={128} src='/villagers/Jodi.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>12</div>
            <div className='border-2 border-black'>13
                {birthday && season=='Summer' ? <Image width={128} src='/villagers/Alex.png' alt=''/> : <></>}
                {birthday && season=='Fall' ? <Image width={128} src='/villagers/Abigail.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>14
                {birthday && season=='Spring' ? <Image width={128} src='/villagers/Haley.png' alt=''/> : <></>}
                {birthday && season=='Winter' ? <Image width={128} src='/villagers/Harvey.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>15
                {birthday && season=='Fall' ? <Image width={128} src='/villagers/Sandy.png' alt=''/> : <></>}
                {event && season == 'Spring' ? <Image width={48} radius='none' src='/icons/Iridium_Quality.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>16
                {event && season == 'Spring' ? <Image width={48} radius='none' src='/icons/Iridium_Quality.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>17
                {birthday && season=='Summer' ? <Image width={128} src='/villagers/Sam.png' alt=''/> : <></>}
                {birthday && season=='Winter' ? <Image width={128} src='/villagers/Wizard.png' alt=''/> : <></>}
                {event && season == 'Spring' ? <Image width={48} radius='none' src='/icons/Iridium_Quality.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>18
                {!birthday ? <Image width={128} height={128} src='' alt=''/> : <></>}
                {birthday && season=='Spring' ? <Image width={128} src='/villagers/Pam.png' alt=''/> : <></>}
                {birthday && season=='Fall' ? <Image width={128} src='/villagers/Marnie.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>19
                {birthday && season=='Summer' ? <Image width={128} src='/villagers/Demetrius.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>20
                {birthday && season=='Spring' ? <Image width={128} src='/villagers/Shane.png' alt=''/> : <></>}
                {birthday && season=='Winter' ? <Image width={128} src='/villagers/Evelyn.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>21
                {birthday && season=='Fall' ? <Image width={128} src='/villagers/Robin.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>22
                {birthday && season=='Summer' ? <Image width={128} src='/villagers/Dwarf.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>23
                {birthday && season=='Winter' ? <Image width={128} src='/villagers/Leah.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>24
                {birthday && season=='Summer' ? <Image width={128} src='/villagers/Willy.png' alt=''/> : <></>}
                {birthday && season=='Fall' ? <Image width={128} src='/villagers/George.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>25</div>
            <div className='border-2 border-black'>26
                {birthday && season=='Spring' ? <Image width={128} src='/villagers/Pierre.png' alt=''/> : <></>}
                {birthday && season=='Summer' ? <Image width={128} src='/villagers/Leo.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>27
                {birthday && season=='Spring' ? <Image width={128} src='/villagers/Emily.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black'>28
                <Image width={128} height={128} src='' alt=''/>
            </div>
        </div>
    </div>
  );
}
