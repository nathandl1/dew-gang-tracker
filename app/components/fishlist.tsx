'use client'
import React from 'react'
import fish from '@/app/dashboard/fishfinder/fish'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Image} from "@nextui-org/react";

interface FishProps {
  season: string;
  weather:string;
  time:number;
}
const columns = [
  {
    key:"image",
    label: "Image",
  }, 
  {
    key:"name",
    label: "Name",
  }, 
  {
    key:"location",
    label: "Location(s)",
  }, 
]

export default function Fishlist({season, weather, time}:FishProps) {
  const timeArray:string[] = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm', '1am', '2am'];
  function searched(value:any){
    return (time >= value.start && time <= value.end) && (value.season == "All" || season == value.season) && (value.weather=="Any" || season == value.season);
  }
  const filtered = fish.filter(searched);
  return (
    <div>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody>
          {
            filtered.map((filter)=>(
              <TableRow key={filter.name}>
                <TableCell><Image src={filter.src} alt={''} width={48} radius='none'></Image></TableCell>
                <TableCell>{filter.name}</TableCell>
                <TableCell>{filter.location}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
