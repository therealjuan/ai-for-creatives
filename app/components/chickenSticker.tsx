"use client";

import Image from 'next/image';
import chickenSticker from '/public/chicken-sticker.svg';

export const ChickenSticker = () => {

    return (
            <div className='pr-8 max-lg:hidden relative draggable'>
                <Image src={chickenSticker.src} alt="Chicken" className="draggable w-full rotate-[-5deg]" width="132" height="140" />
            </div>
    )
};
