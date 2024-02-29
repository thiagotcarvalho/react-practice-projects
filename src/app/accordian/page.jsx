'use client'

import { useState } from 'react';
import data from './data';

export default function Accordian() {
  const [selected, setSelected] = useState(null)

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  console.log(selected);

  return <div className='wrapper'>
    <div className='accordian'>
      {
        data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className='item'>
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className='title'
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