'use client'
import React, { useState } from 'react'
import {Popover, PopoverTrigger, PopoverContent, Button, Image} from "@nextui-org/react";

export default function Icon({name}) {
    type CharacterDictionary = {
        [key: string]: Character;
    };
    type Character = {
        name: string;
        favoriteGifts: string[];
    };
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(!visible);
    
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
        return characters[characterName].favoriteGifts;
    }
    
    const favoriteGifts = findFavoriteGifts(name);

  return (
    <div>
      <Image
        src={"/villagers/"+name+".png"}
        alt=""
        onClick={handler}
        style={{ cursor: 'pointer', width: '200px', height: 'auto' }}
      />
      <Popover
        isOpen={visible}
        onClose={() => setVisible(false)}
        placement="bottom"
      >
        <PopoverTrigger>
          <div></div>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            Loved Gifts:
            <ol>
                {favoriteGifts.map((gift) => {
                    return (
                        <li>{gift}</li>
                    )
                })}
            </ol>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

{/*
    {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
*/}