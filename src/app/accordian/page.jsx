'use client'

import { useState } from 'react';
import data from './data';

export default function Accordian() {
  const [selected, setSelected] = useState(null)

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  console.log(selected);

  return <div className='flex justify-center items-center h-screen w-screen'>
    <div className='w-500px'>
      {
        data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className='bg-teal-400 mb-10 px-20 py-10'>
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className='flex justify-between items-center cursor-pointer text-white '
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                selected === dataItem.id ? (
                  <div className='content'>{dataItem.answer}</div>
                ) : (false)
              }
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
    </div>
  </div>
}