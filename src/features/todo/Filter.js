import React from 'react'
import { useDispatch } from 'react-redux';
import { setVisibility } from './todoSlice';
const filterData = [
  {
    id: 'showAll',
    label: 'Show all',
    value: 'SHOW_ALL'
  },
  {
    id: 'showOpen',
    label: 'Show Open',
    value: 'SHOW_OPEN'
  },
  {
    id: 'showClosed',
    label: 'Show Closed',
    value: 'SHOW_CLOSED'
  }
]

const Filter = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {
        filterData.map((item, index) => (
          <span key={`item${index}`}>
            <input
              id={item.id}
              type="radio"
              value={item.value}
              name={item.id}
              checked={data === item.value ? 'checked' : ''}
              onChange={() => dispatch(setVisibility(item.value))}
            />
            <label for={item.id}>{item.label}</label>
          </span>
        ))
      }
    </div>
  )
}

export default Filter;
