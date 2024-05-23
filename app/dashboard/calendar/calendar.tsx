'use client'
import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image} from "@nextui-org/react";


export default function Calendar({birthday, event, season}) {
  return (
    <div>
        <div className="grid grid-cols-7 gap-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Kent.png' alt='Penny from Stardew Valley'/> : <></>}
            </div>
            <div>05</div>
            <div>06</div>
            <div>07
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Lewis.png' alt='Penny from Stardew Valley'/> : <></>}
            </div>
            <div>08</div>
            <div>09</div>
            <div>10
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Vincent.png' alt='Penny from Stardew Valley'/> : <></>}
            </div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Haley.png' alt='Penny from Stardew Valley'/> : <></>}
            </div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Pam.png' alt='Penny from Stardew Valley'/> : <></>}
            </div>
            <div>19</div>
            <div>20
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Shane.png' alt='Penny from Stardew Valley'/> : <></>}
            </div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Pierre.png' alt='Penny from Stardew Valley'/> : <></>}
            </div>
            <div>27
                {birthday && season=='Spring' ? <Image width='100%' src='/villagers/Emily.png' alt='Penny from Stardew Valley'/> : <></>}
            </div>
            <div>28</div>
        </div>
    </div>
  );
}
