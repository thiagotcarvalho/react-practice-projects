'use client'

import { useState } from 'react';
import data from './data';

export default function Accordian() {
  const [selected, setSelected] = useState(null)
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultipleSelection(id) {
    let currentMultipleSelected = [...multipleSelected];
    let indexOfCurrentId = currentMultipleSelected.indexOf(id);

    if (indexOfCurrentId === -1) {
      currentMultipleSelected.push(id);
    } else {
      currentMultipleSelected.splice(indexOfCurrentId, 1);
    }

    setMultipleSelected(currentMultipleSelected);
  }

  function handleMultiSelectClick() {
    setSelected(null);
    setMultipleSelected([]);
    setEnableMultipleSelection(!enableMultipleSelection);
  }

  return (
    <div className="accordian-wrapper">
      {/* Change color when button is selected */}
      {/* <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}> */}
      <button onClick={handleMultiSelectClick}>
        Enable Multi-Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map(dataItem => (
            <div
              key={dataItem.id}
              className="accordian-item"
            >
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="accordian-title"
              >
                <h3>{dataItem.question}</h3>
                {/* Change to minus (-) when active. */}
                <span>+</span>
              </div>
              {/* Simplify this... */}
              {enableMultipleSelection
                ? multipleSelected.indexOf(dataItem.id) !== -1 && (
                  <div className="accordian-content">{dataItem.answer}</div>
                ) :
                selected === dataItem.id && (
                  <div className="accordian-content">{dataItem.answer}</div>
                )
              }
            </div>
          ))
        ) : (
          <div className="accordian-content">No data found</div>
        )}
      </div>
    </div>
  )
}