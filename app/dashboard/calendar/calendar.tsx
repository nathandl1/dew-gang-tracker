'use client'
import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image} from "@nextui-org/react";


export default function Calendar({birthday, event, season}) {
  return (
    <div>
        <div className="grid grid-cols-7 gap-4 w-3/4">
            <div>01
                {birthday && season=='Winter' ? <Image width='100%' src='/villagers/Krobus.png' alt=''/> : <></>}
            </div>
            <div>02
                {birthday && season=='Fall' ? <Image width='100%' src='/villagers/Penny.png' alt=''/> : <></>}
            </div>
            <div>03
                {birthday && season=='Winter' ? <Image width='100%' src='/villagers/Linus.png' alt=''/> : <></>}
            </div>
            <div>04
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Kent.png' alt=''/> : <></>}
                {birthday && season=='Summer' ? <Image width='100%' src='/villagers/Jas.png' alt=''/> : <></>}
            </div>
            <div>05
                {birthday && season=='Fall' ? <Image width='100%' src='/villagers/Elliott.png' alt=''/> : <></>}
            </div>
            <div>06</div>
            <div>07
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Lewis.png' alt=''/> : <></>}
                {birthday && season=='Winter' ? <Image width='100%' src='/villagers/Caroline.png' alt=''/> : <></>}
            </div>
            <div>08
                {birthday && season=='Summer' ? <Image width='100%' src='/villagers/Gus.png' alt=''/> : <></>}
            </div>
            <div>09</div>
            <div>10
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Vincent.png' alt=''/> : <></>}
                {birthday && season=='Summer' ? <Image width='100%' src='/villagers/Maru.png' alt=''/> : <></>}
                {birthday && season=='Winter' ? <Image width='100%' src='/villagers/Sebastian.png' alt=''/> : <></>}
            </div>
            <div>11
                {birthday && season=='Fall' ? <Image width='100%' src='/villagers/Jodi.png' alt=''/> : <></>}
            </div>
            <div>12</div>
            <div>13
                {birthday && season=='Summer' ? <Image width='100%' src='/villagers/Alex.png' alt=''/> : <></>}
                {birthday && season=='Fall' ? <Image width='100%' src='/villagers/Abigail.png' alt=''/> : <></>}
            </div>
            <div>14
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Haley.png' alt=''/> : <></>}
                {birthday && season=='Winter' ? <Image width='100%' src='/villagers/Harvey.png' alt=''/> : <></>}
            </div>
            <div>15
                {birthday && season=='Fall' ? <Image width='100%' src='/villagers/Sandy.png' alt=''/> : <></>}
            </div>
            <div>16</div>
            <div>17
                {birthday && season=='Summer' ? <Image width='100%' src='/villagers/Sam.png' alt=''/> : <></>}
                {birthday && season=='Winter' ? <Image width='100%' src='/villagers/Wizard.png' alt=''/> : <></>}
            </div>
            <div>18
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Pam.png' alt=''/> : <></>}
                {birthday && season=='Fall' ? <Image width='100%' src='/villagers/Marnie.png' alt=''/> : <></>}
            </div>
            <div>19
                {birthday && season=='Summer' ? <Image width='100%' src='/villagers/Demetrius.png' alt=''/> : <></>}
            </div>
            <div>20
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Shane.png' alt=''/> : <></>}
                {birthday && season=='Winter' ? <Image width='100%' src='/villagers/Evelyn.png' alt=''/> : <></>}
            </div>
            <div>21
                {birthday && season=='Fall' ? <Image width='100%' src='/villagers/Robin.png' alt=''/> : <></>}
            </div>
            <div>22
                {birthday && season=='Summer' ? <Image width='100%' src='/villagers/Dwarf.png' alt=''/> : <></>}
            </div>
            <div>23
                {birthday && season=='Winter' ? <Image width='100%' src='/villagers/Leah.png' alt=''/> : <></>}
            </div>
            <div>24
                {birthday && season=='Summer' ? <Image width='100%' src='/villagers/Willy.png' alt=''/> : <></>}
                {birthday && season=='Fall' ? <Image width='100%' src='/villagers/George.png' alt=''/> : <></>}
            </div>
            <div>25</div>
            <div>26
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Pierre.png' alt=''/> : <></>}
                {birthday && season=='Summer' ? <Image width='100%' src='/villagers/Leo.png' alt=''/> : <></>}
            </div>
            <div>27
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Emily.png' alt=''/> : <></>}
            </div>
            <div>28</div>
        </div>
    </div>
  );
}
