import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { setVisibility } from './todoSlice';

const filterData = [
  {
    id: 'showAll',
    label: <FormattedMessage id="filter.SHOW_ALL" />,
    value: 'SHOW_ALL'
  },
  {
    id: 'showOpen',
    label: <FormattedMessage id="filter.SHOW_OPEN" />,
    value: 'SHOW_OPEN'
  },
  {
    id: 'showClosed',
    label: <FormattedMessage id="filter.SHOW_CLOSED" />,
    value: 'SHOW_CLOSED'
  }
];

const Filter = ({ data }) => {
  const [value, setvalue] = useState(data);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setVisibility(value));
    setvalue(value);
  }

  return (
    <RadioGroup
      row
      aria-label="filter"
      name="filter-radio-buttons-group"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    >
      {
        filterData.map((item, index) => (
          <FormControlLabel
            key={`radio${index}`}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))
      }
    </RadioGroup>
  )
}

export default Filter;
