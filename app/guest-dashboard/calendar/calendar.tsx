'use client'
import React from 'react'
import {Image, Button} from "@nextui-org/react";
import NPCIcon from './npc-icon';
interface CalendarProps {
  birthday:boolean;
  event:boolean;
  season: string;
}
export default function Calendar({birthday, event, season}:CalendarProps) {
    type CharacterDictionary = {
        [key: string]: Character;
    };
    type Character = {
        name: string;
        favoriteGifts: string[];
    };

    const characters: CharacterDictionary = {
        "Abigail": {
          name: "Abigail",
          favoriteGifts: [
            "Amethyst",
            "Banana Pudding",
            "Blackberry Cobbler",
            "Chocolate Cake",
            "Pufferfish",
            "Pumpkin",
            "Spicy Eel"
          ]
        },
        "Alex": {
          name: "Alex",
          favoriteGifts: [
            "Complete Breakfast",
            "Salmon Dinner"
          ]
        },
        "Caroline": {
          name: "Caroline",
          favoriteGifts: [
            "Fish Taco",
            "Green Tea",
            "Summer Spangle",
            "Tropical Curry"
          ]
        },
        "Clint": {
          name: "Clint",
          favoriteGifts: [
            "Amethyst",
            "Aquamarine",
            "Artichoke Dip",
            "Emerald",
            "Fiddlehead Risotto",
            "Gold Bar",
            "Iridium Bar",
            "Jade",
            "Omni Geode",
            "Ruby",
            "Topaz"
          ]
        },
        "Demetrius": {
          name: "Demetrius",
          favoriteGifts: [
            "Bean Hotpot",
            "Ice Cream",
            "Rice Pudding",
            "Strawberry"
          ]
        },
        "Dwarf": {
            name: "Dwarf",
            favoriteGifts: [
              "Amethyst",
              "Aquamarine",
              "Emerald",
              "Jade",
              "Lava Eel",
              "Lemon Stone",
              "Omni Geode",
              "Ruby",
              "Topaz"
            ]
          },
        "Elliott": {
          name: "Elliott",
          favoriteGifts: [
            "Crab Cakes",
            "Duck Feather",
            "Lobster",
            "Pomegranate",
            "Squid Ink",
            "Tom Kha Soup"
          ]
        },
        "Emily": {
          name: "Emily",
          favoriteGifts: [
            "Amethyst",
            "Aquamarine",
            "Cloth",
            "Emerald",
            "Jade",
            "Ruby",
            "Survival Burger",
            "Topaz",
            "Wool"
          ]
        },
        "Evelyn": {
          name: "Evelyn",
          favoriteGifts: [
            "Beet",
            "Chocolate Cake",
            "Diamond",
            "Fairy Rose",
            "Stuffing",
            "Tulip"
          ]
        },
        "George": {
          name: "George",
          favoriteGifts: [
            "Fried Mushroom",
            "Leek"
          ]
        },
        "Gus": {
          name: "Gus",
          favoriteGifts: [
            "Diamond",
            "Escargot",
            "Fish Taco",
            "Orange",
            "Tropical Curry"
          ]
        },
        "Haley": {
          name: "Haley",
          favoriteGifts: [
            "Coconut",
            "Fruit Salad",
            "Pink Cake",
            "Sunflower"
          ]
        },
        "Harvey": {
          name: "Harvey",
          favoriteGifts: [
            "Coffee",
            "Pickles",
            "Super Meal",
            "Truffle Oil",
            "Wine"
          ]
        },
        "Jas": {
          name: "Jas",
          favoriteGifts: [
            "Fairy Rose",
            "Pink Cake",
            "Plum Pudding"
          ]
        },
        "Jodi": {
          name: "Jodi",
          favoriteGifts: [
            "Chocolate Cake",
            "Crispy Bass",
            "Diamond",
            "Eggplant Parmesan",
            "Fried Eel",
            "Pancakes",
            "Rhubarb Pie"
          ]
        },
        "Kent": {
          name: "Kent",
          favoriteGifts: [
            "Fiddlehead Risotto",
            "Roasted Hazelnuts"
          ]
        },
        "Krobus": {
          name: "Krobus",
          favoriteGifts: [
            "Diamond",
            "Iridium Bar",
            "Pumpkin",
            "Void Egg",
            "Void Mayonnaise",
            "Wild Horseradish"
          ]
        },
        "Leah": {
          name: "Leah",
          favoriteGifts: [
            "Goat Cheese",
            "Poppyseed Muffin",
            "Salad",
            "Stir Fry",
            "Truffle",
            "Vegetable Medley",
            "Wine"
          ]
        },
        "Leo": {
          name: "Leo",
          favoriteGifts: [
            "Duck Feather",
            "Mango",
            "Ostrich Egg",
            "Poi",
            "Dragon Tooth"
          ]
        },
        "Lewis": {
          name: "Lewis",
          favoriteGifts: [
            "Autumn's Bounty",
            "Glazed Yams",
            "Green Tea",
            "Hot Pepper",
            "Vegetable Medley"
          ]
        },
        "Linus": {
          name: "Linus",
          favoriteGifts: [
            "Blueberry Tart",
            "Cactus Fruit",
            "Coconut",
            "Dish O' The Sea",
            "Yam"
          ]
        },
        "Marnie": {
          name: "Marnie",
          favoriteGifts: [
            "Diamond",
            "Farmer's Lunch",
            "Pink Cake",
            "Pumpkin Pie"
          ]
        },
        "Maru": {
          name: "Maru",
          favoriteGifts: [
            "Battery Pack",
            "Cauliflower",
            "Cheese Cauliflower",
            "Diamond",
            "Gold Bar",
            "Iridium Bar",
            "Miner's Treat",
            "Pepper Poppers",
            "Radioactive Bar",
            "Strawberry"
          ]
        },
        "Pam": {
          name: "Pam",
          favoriteGifts: [
            "Beer",
            "Cactus Fruit",
            "Glazed Yams",
            "Mead",
            "Pale Ale",
            "Parsnip Soup",
            "Parsley",
            "Parsnip"
          ]
        },
        "Penny": {
          name: "Penny",
          favoriteGifts: [
            "Diamond",
            "Emerald",
            "Melon",
            "Poppy",
            "Poppyseed Muffin",
            "Red Plate",
            "Roots Platter",
            "Sandfish",
            "Tom Kha Soup"
          ]
        },
        "Pierre": {
          name: "Pierre",
          favoriteGifts: [
            "Fried Calamari"
          ]
        },
        "Robin": {
          name: "Robin",
          favoriteGifts: [
            "Goat Cheese",
            "Peach",
            "Spaghetti"
          ]
        },
        "Sam": {
          name: "Sam",
          favoriteGifts: [
            "Cactus Fruit",
            "Maple Bar",
            "Pizza",
            "Tigerseye"
          ]
        },
        "Sandy": {
          name: "Sandy",
          favoriteGifts: [
            "Crocus",
            "Daffodil",
            "Mango Sticky Rice",
            "Sweet Pea"
          ]
        },
        "Sebastian": {
          name: "Sebastian",
          favoriteGifts: [
            "Frozen Tear",
            "Obsidian",
            "Pumpkin Soup",
            "Sashimi",
            "Void Egg"
          ]
        },
        "Shane": {
          name: "Shane",
          favoriteGifts: [
            "Beer",
            "Hot Pepper",
            "Pepper Poppers",
            "Pizza"
          ]
        },
        "Vincent": {
          name: "Vincent",
          favoriteGifts: [
            "Cranberry Candy",
            "Grape",
            "Pink Cake",
            "Snail"
          ]
        },
        "Willy": {
          name: "Willy",
          favoriteGifts: [
            "Catfish",
            "Diamond",
            "Iridium Bar",
            "Mead",
            "Octopus",
            "Pumpkin",
            "Sea Cucumber",
            "Sturgeon"
          ]
        },
        "Wizard": {
          name: "Wizard",
          favoriteGifts: [
            "Purple Mushroom",
            "Solar Essence",
            "Super Cucumber",
            "Void Essence"
          ]
        }
      };

      function findFavoriteGifts(characterName: string): string[]{
        const character = characters[characterName];
        if (character) {
            return character.favoriteGifts;
        } else {
            return [];
  }
    }

  return (
    <div>
        <div className="grid grid-cols-7 w-7/8 h-[75vh]">
            <div className='border-2 border-black bg-white'>01
                {birthday && season=='Winter' ? <NPCIcon name='Krobus' loved={findFavoriteGifts('Krobus')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>02
                {birthday && season=='Fall' ? <NPCIcon name="Penny" loved={findFavoriteGifts('Penny')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>03
                {birthday && season=='Winter' ? <NPCIcon name='Linus' loved={findFavoriteGifts('Linus')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>04
                {birthday && season=='Spring' ? <NPCIcon name="Kent" loved={findFavoriteGifts('Kent')}/> : <></>}
                {birthday && season=='Summer' ? <NPCIcon name='Jas' loved={findFavoriteGifts('Jas')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>05
                {birthday && season=='Fall' ? <NPCIcon name='Elliott' loved={findFavoriteGifts('Elliott')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>06
                <Image width={128} height={128} src='' alt=''/>
            </div>
            <div className='border-2 border-black bg-white'>07
                {birthday && season=='Spring' ? <NPCIcon name="Lewis" loved={findFavoriteGifts('Lewis')}/> : <></>}
                {birthday && season=='Winter' ? <NPCIcon name="Caroline" loved={findFavoriteGifts('Caroline')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>08
                {birthday && season=='Summer' ? <NPCIcon name="Gus" loved={findFavoriteGifts('Gus')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>09
                <Image width={128} height={128} src='' alt=''/>
            </div>
            <div className='border-2 border-black bg-white'>10
                {birthday && season=='Spring' ? <NPCIcon name="Vincent" loved={findFavoriteGifts('Vincent')}/> : <></>}
                {birthday && season=='Summer' ? <NPCIcon name="Maru" loved={findFavoriteGifts('Maru')}/> : <></>}
                {birthday && season=='Winter' ? <NPCIcon name="Sebastian" loved={findFavoriteGifts('Sebastian')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>11
                {birthday && season=='Fall' ? <NPCIcon name="Jodi" loved={findFavoriteGifts('Jodi')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>12</div>
            <div className='border-2 border-black bg-white'>13
                {birthday && season=='Summer' ? <NPCIcon name="Alex" loved={findFavoriteGifts('Alex')}/> : <></>}
                {birthday && season=='Fall' ? <NPCIcon name="Abigail" loved={findFavoriteGifts('Abigail')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>14
                {birthday && season=='Spring' ? <NPCIcon name="Haley" loved={findFavoriteGifts('Haley')}/> : <></>}
                {birthday && season=='Winter' ? <NPCIcon name="Harvey" loved={findFavoriteGifts('Harvey')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>15
                {birthday && season=='Fall' ? <NPCIcon name="Sandy" loved={findFavoriteGifts('Sandy')}/> : <></>}
                {event && season == 'Spring' ? <Image width={48} radius='none' src='/icons/Iridium_Quality.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>16
                {event && season == 'Spring' ? <Image width={48} radius='none' src='/icons/Iridium_Quality.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>17
                {birthday && season=='Summer' ? <NPCIcon name="Sam" loved={findFavoriteGifts('Sam')}/> : <></>}
                {birthday && season=='Winter' ? <NPCIcon name="Wizard" loved={findFavoriteGifts('Wizard')}/> : <></>}
                {event && season == 'Spring' ? <Image width={48} radius='none' src='/icons/Iridium_Quality.png' alt=''/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>18
                {!birthday ? <Image width={128} height={128} src='' alt=''/> : <></>}
                {birthday && season=='Spring' ? <NPCIcon name="Pam" loved={findFavoriteGifts('Pam')}/> : <></>}
                {birthday && season=='Fall' ? <NPCIcon name="Marnie" loved={findFavoriteGifts('Marnie')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>19
                {birthday && season=='Summer' ? <NPCIcon name="Demetrius" loved={findFavoriteGifts('Demetrius')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>20
                {birthday && season=='Spring' ? <NPCIcon name="Shane" loved={findFavoriteGifts('Shane')}/> : <></>}
                {birthday && season=='Winter' ? <NPCIcon name="Evelyn" loved={findFavoriteGifts('Evelyn')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>21
                {birthday && season=='Fall' ? <NPCIcon name="Robin" loved={findFavoriteGifts('Robin')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>22
                {birthday && season=='Summer' ? <NPCIcon name="Dwarf" loved={findFavoriteGifts('Dwarf')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>23
                {birthday && season=='Winter' ? <NPCIcon name="Leah" loved={findFavoriteGifts('Leah')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>24
                {birthday && season=='Summer' ? <NPCIcon name="Willy" loved={findFavoriteGifts('Willy')}/> : <></>}
                {birthday && season=='Fall' ? <NPCIcon name="George" loved={findFavoriteGifts('George')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>25</div>
            <div className='border-2 border-black bg-white'>26
                {birthday && season=='Spring' ? <NPCIcon name="Pierre" loved={findFavoriteGifts('Pierre')}/> : <></>}
                {birthday && season=='Summer' ? <NPCIcon name="Leo" loved={findFavoriteGifts('Leo')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>27
                {birthday && season=='Spring' ? <NPCIcon name="Emily" loved={findFavoriteGifts('Emily')}/> : <></>}
            </div>
            <div className='border-2 border-black bg-white'>28
                <Image width={128} height={128} src='' alt=''/>
            </div>
        </div>
    </div>
  );
}
