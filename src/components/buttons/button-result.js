import React from 'react'
import styled from 'styled-components'


const ButtonResultStl = styled.button`
  border:none;
  border-radius: 3px;
  background-color: #ed807c;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.34px;
  padding: 10px 20px;
  margin: 30px 20px 30px 0;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: #d56b6b;
  }
`


export const ButtonResult = ({text, onClick}) => {

    return (
        <ButtonResultStl
            onClick={onClick}
        >
            {text}
        </ButtonResultStl>
    )
}