'use client'
import React from 'react'
interface FishProps {
  day: number;
  weather:string;
}

export default function Fishlist({day, weather}:FishProps) {
  return (
    <div>
        <p>Day is: {day} Weather is: {weather}</p>
    </div>
  )
}
