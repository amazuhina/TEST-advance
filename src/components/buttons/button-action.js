import React from 'react'
import styled from 'styled-components'

const ButtonStl = styled.button`
  width: 27px;
  height: 27px;
  margin-right: 15px;
  border: none;
  border-radius: 3px;
  background-color: #75839b;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: #545d75;
  }
`


export const ButtonAction = ({text, onClick}) => {

    return (
        <ButtonStl
            onClick={onClick}
        >
            {text}
        </ButtonStl>
    )
}