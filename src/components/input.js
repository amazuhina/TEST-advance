import React from 'react'
import styled from 'styled-components'


const InputStl = styled.input`
  min-width: 238px;
  height: 25px;
  outline: none;
  border: 1px solid #d6d0d0;
  padding: 0 5px;
  font-size: 14px;
  margin-right: 15px;
  color: #251c1c;
  border-radius: 3px;
  margin-bottom: 15px;
`


export const Input = ({onChange, value}) => {

    return (
        <InputStl
            onChange={onChange}
            value={value}
        />
    )
}