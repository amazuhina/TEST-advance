import React from 'react'
import styled from 'styled-components'
import {useDispatch} from "react-redux";


import {Dropdown} from "./dropdown";
import {Input} from "./input";
import {ButtonAction} from "./buttons/button-action";
import {addInput, deleteInput, setDropDown, setValue} from "../redux/slice";
import {dropdownMenu} from "../consts";



const ItemStl = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap; 
  margin-bottom: 10px;
`


export const Item = ({type, value, id}) => {

    const dispatch = useDispatch()


    const onAddItem = () => {
        const generateId = Math.random()

        const payload = {
            input: {
                id: generateId,
                type: dropdownMenu.email,
                value: '',
            },
            prevInputId: id
        }

        dispatch(addInput(payload))
    }


    const onDeleteItem = () => {
        const payload = {
            id
        }

        dispatch(deleteInput(payload))
    }


    const onValueChange = (e) => {
        const value = e.target.value

        const payload = {
            id: id,
            value: value
        }

        dispatch(setValue(payload))
    }


    const onDropDownChange = (e) => {
        const value = e.target.value

        const payload = {
            id: id,
            value: value
        }

        dispatch(setDropDown(payload))
    }



    return (
        <ItemStl>
            <Dropdown
                onChange={onDropDownChange}
                type={type}
            />
            <Input
                onChange={onValueChange}
                value={value}
            />

            <ButtonAction
                text={'+'}
                onClick={onAddItem}
            />
            <ButtonAction
                text={'-'}
                onClick={onDeleteItem}
            />
        </ItemStl>
    )
}