'use client'
import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image} from "@nextui-org/react";


export default function Calendar() {
  return (
    <div>
        
        <Table hideHeader aria-label="Example empty table" className='text-xl'>
            <TableHeader>
                <TableColumn>Sunday</TableColumn>
                <TableColumn>Monday</TableColumn>
                <TableColumn>Tuesday</TableColumn>
                <TableColumn>Wednesday</TableColumn>
                <TableColumn>Thursday</TableColumn>
                <TableColumn>Friday</TableColumn>
                <TableColumn>Saturday</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                <TableCell>
                    1
                    <Image 
                        width='100%'
                        src='/villagers/Penny.png'
                        alt='Penny from Stardew Valley'
                    />
                </TableCell>
                <TableCell>
                    2
                    <Image 
                        width='100%'
                        src='/villagers/Harvey.png'
                        alt='Penny from Stardew Valley'
                    />
                </TableCell>
                <TableCell>
                    3
                    <Image 
                        width='100%'
                        src='/villagers/Jodi.png'
                        alt='Penny from Stardew Valley'
                    />
                </TableCell>
                <TableCell>
                    4
                    <Image 
                        width='100%'
                        src='/villagers/Shane.png'
                        alt='Penny from Stardew Valley'
                    />
                </TableCell>
                <TableCell>
                    5
                    <Image 
                        width='100%'
                        src='/villagers/Lewis.png'
                        alt='Penny from Stardew Valley'
                    />
                </TableCell>
                <TableCell>
                    6
                    <Image 
                        width='100%'
                        src='/villagers/Willy.png'
                        alt='Penny from Stardew Valley'
                    />
                </TableCell>
                <TableCell>
                    7
                    <Image 
                        width='100%'
                        src={'/villagers/'+'Sam'+'.png'}
                        alt='Penny from Stardew Valley'
                    />
                </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
  );
}
