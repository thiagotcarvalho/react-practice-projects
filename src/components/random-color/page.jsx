'use client'

import { useEffect, useState } from 'react';

export default function RandomColor() {
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#000000');

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hexadecimalNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const hexColorLength = 6;
    let hexColor = '#';

    for (let i = 0; i < hexColorLength; i++) {
      hexColor += hexadecimalNumbers[randomColorUtility(hexadecimalNumbers.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const valueR = randomColorUtility(256);
    const valueG = randomColorUtility(256);
    const valueB = randomColorUtility(256);
    let rgbValue = `rgb(${valueR},${valueG},${valueB})`;

    setColor(rgbValue);
  }

  useEffect(() => {
    if (colorType === 'rgb') {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorType]);

  return (
    <div className="random-color-container" style={{ background: color }}>
      <div className="random-color-button-wrapper">
        <button onClick={() => setColorType('rgb')}>Create RGB Color</button>
        <button onClick={() => setColorType('hex')}>Create Hex Color</button>
        <button
          onClick={
            colorType === 'hex'
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="random-color-title-wrapper">
        <h3>{colorType === 'rgb' ? 'RGB Color' : 'Hex Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}