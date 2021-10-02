import React from 'react'
import styled from 'styled-components'
import {Item} from "./item";
import {useSelector} from "react-redux";
import {inputsSelector} from "../redux/slice";


const FormStl = styled.div`
  margin-top: 50px;
`


export const Form = () => {

    const content = useSelector(inputsSelector)

    return (
        <FormStl>
            {
                content.map((item, index) => (
                    <Item
                        key={index}
                        type={item.type}
                        value={item.value}
                        id={item.id}
                    />
                ))
            }
        </FormStl>
    )
}