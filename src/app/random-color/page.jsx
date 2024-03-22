'use client'

import { useState } from 'react';

export default function RandomColor() {
    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState('#000000');

    return (
        <div className="random-color-container ">
            <button>Create Hex Color</button>
            <button>Create RGB Color</button>
            <button>Generate Random Color</button>
        </div>
    )
}