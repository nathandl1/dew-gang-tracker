'use client'
import { Image, Radio, RadioGroup, Slider } from '@nextui-org/react'
import React, { useState } from 'react'
import Fishlist from '@/app/components/fishlist';


export default function FishFinderPage() {
  const [season, setSeason] = useState<any>("Spring");
  const [selected, setSelected] = useState<any>("Sun");
  const [time, setTime] = useState<any>(0);
  const timeArray:string[] = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm', '1am', '2am'];

  return (
    <div className='flex flex-col flex-grow h-fit max-h-[85vh] overflow-auto bg-white p-6 rounded-lg'>
      <RadioGroup
        label="Select Season: "
        value={season}
        onValueChange={setSeason}
        orientation='horizontal'
        color='success'
        className='p-3'
      >
        <Radio value="Spring">Spring</Radio>
        <Radio value="Summer">Summer</Radio>
        <Radio value="Fall">Fall</Radio>
        <Radio value="Winter">Winter</Radio>
        <Radio value="All">All</Radio>
      </RadioGroup>
      <RadioGroup
        label="Select Weather: "
        value={selected}
        onValueChange={setSelected}
        orientation='horizontal'
        color='success'
        className='p-3'
      >
        <Radio value="Sun">Sunny</Radio>
        <Radio value="Rain">Rainy</Radio>
        <Radio value="Wind">Windy</Radio>
        <Radio value="Storm">Stormy</Radio>
        <Radio value="Snow">Snowy</Radio>
      </RadioGroup>
      <div className="p-3 hidden md:block">
        <Slider 
        label="Select a value" 
        color="foreground"
        size="sm"
        step={1} 
        maxValue={20}
        minValue={0}
        marks={[
          {
            value: 0,
            label: "6am",
          },
          {
            value: 1,
            label: "7am",
          },
          {
            value: 2,
            label: "8am",
          },
          {
            value: 3,
            label: "9am",
          },
          {
            value: 4,
            label: "10am",
          },
          {
            value: 5,
            label: "11am",
          },
          {
            value: 6,
            label: "12pm",
          },
          {
            value: 7,
            label: "1pm",
          },
          {
            value: 8,
            label: "2pm",
          },
          {
            value: 9,
            label: "3pm",
          },
          {
            value: 10,
            label: "4pm",
          },
          {
            value: 11,
            label: "5pm",
          },
          {
            value: 12,
            label: "6pm",
          },
          {
            value: 13,
            label: "7pm",
          },
          {
            value: 14,
            label: "8pm",
          },
          {
            value: 15,
            label: "9pm",
          },
          {
            value: 16,
            label: "10pm",
          },
          {
            value: 17,
            label: "11pm",
          },
          {
            value: 18,
            label: "12am",
          },
          {
            value: 19,
            label: "1am",
          },
          {
            value: 20,
            label: "2am",
          },
        ]}
        defaultValue={0}
        hideValue
        value={time}
        onChange={(event)=>{
          setTime(event);
        }}
        />
      </div>
      
      <div className="p-3 sm:block md:hidden">
        <Slider 
        label="Select a value" 
        color="foreground"
        size="sm"
        step={1} 
        maxValue={20}
        minValue={0}
        defaultValue={0}
        value={time}
        onChange={(event)=>{
          setTime(event);
        }}
        getValue={(time) => `${timeArray[time as number]}`}
        />
      </div>
      <Fishlist season={season} weather={selected} time={time}/>
    </div>
  );
}


// export default function App() {
//   const [value, setValue] = React.useState(25);

//   return (
//     <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
//       <Slider
//         aria-label="Volume"
//         size="lg"
//         color="secondary"
//         onChangeEnd={setValue}
//         className="max-w-md"
//       />
//       <p className="text-default-500 font-medium text-small">Current volume: {value}</p>
//     </div>
//   );
// }