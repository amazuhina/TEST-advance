import React from 'react'
import styled from 'styled-components'
import {dropdownMenu} from "../consts";


const DropdownStl = styled.div`
    margin-bottom: 15px;
`

const SelectStl = styled.select`
  min-width: 250px;
  height: 27px;
  outline: none;
  border: 1px solid #d6d0d0;
  font-size: 14px;
  margin-right: 15px;
  color: #251c1c;
  border-radius: 3px;
  padding: 0 5px;
  cursor: pointer;  
`


export const Dropdown = ({type, onChange}) => {

    const dropdownOptions = Object.values(dropdownMenu)

    return (
        <DropdownStl>
            <SelectStl
                onChange={onChange}
            >
                {
                    dropdownOptions.map(i => (
                        <option selected={i === type}>{i}</option>
                    ))
                }
            </SelectStl>
        </DropdownStl>
    )
}