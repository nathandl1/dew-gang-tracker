'use client'
import { Image, Radio, RadioGroup, Slider } from '@nextui-org/react'
import React, { useState } from 'react'
import Fishlist from '@/app/components/fishlist';

export default function FishMapPage() {
  const [value, setValue] = useState(1);
  const [selected, setSelected] = useState("Sun");
  return (
    <div className='bg-white'>
      <Slider   
        size="lg"
        step={1}
        color="foreground"
        label="Day of the Season"
        showSteps={true} 
        maxValue={28} 
        minValue={1} 
        defaultValue={1}
        className="max-w-md" 
        value={value}
        onChange={setValue}
      />
      <RadioGroup
        label="Select Weather: "
        value={selected}
        onValueChange={setSelected}
        orientation='horizontal'
        color='success'
      >
        <Radio value="Sun">Sunny</Radio>
        <Radio value="Rain">Rainy</Radio>
        <Radio value="Wind">Windy</Radio>
        <Radio value="Storm">Stormy</Radio>
        <Radio value="Snow">Snowy</Radio>
      </RadioGroup>
      <Fishlist day={value} weather={selected} />
    </div>
  )
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