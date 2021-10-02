import React from 'react'
import styled from 'styled-components'
import {useState} from "react";
import {ButtonResult} from "./buttons/button-result";
import {useSelector} from "react-redux";
import {inputsSelector} from "../redux/slice";
import JSONPretty from "react-json-pretty";


const ResultBlockStl = styled.div`
  border-top: 1px solid #fff;
  margin-top: 30px;
`

const ResultScreenStl = styled.div`
  background-color: #a8a9ae;
  color: #fff;
  padding: 40px 30px;
  max-width: 600px;
  border-radius: 3px;
  font-size: 14px;
  margin-bottom: 20px;
`



const convertArrayToObject = (object) => {
    const transformResult = []

    for (let i = 0; i < object.type.length; i++) {
        let newObject = {
            type: object.type[i],
            value: object.value[i],
        }
        transformResult.push(newObject)
    }

    return transformResult
}




export const ResultBlock = () => {

  const content = useSelector(inputsSelector)

  const [result, setResult] = useState('')

  const getFormValues = () => {
      const types = content.map(i => i.type)
      const values = content.map(i => i.value)

      const transformResult = {
          type: types,
          value: values
      }
      return transformResult
  }

  const onShowFirstTask = () => {
      const formValues = getFormValues()

      setResult(JSON.stringify(formValues))
  }

  const onShowSecondTask = () => {
      const formValues = getFormValues()

      const convertArray = convertArrayToObject(formValues)

      setResult(JSON.stringify(convertArray))
  }

  return (
      <ResultBlockStl>
          <ButtonResult
              text={'Первый метод'}
              onClick={onShowFirstTask}
          />
          <ButtonResult
              text={'Второй метод'}
              onClick={onShowSecondTask}
          />


          <ResultScreenStl>
              {result}
          </ResultScreenStl>

          <ResultScreenStl>
              <JSONPretty
                  data={result}
              />
          </ResultScreenStl>
      </ResultBlockStl>
  )
}

