import styled from 'styled-components'
import {ResultBlock} from "./components/result-block";
import {Form} from "./components/form";


const AppStl = styled.div` 
  min-width: 320px;
  overflow-x: hidden;
`

const ContainerStl = styled.div`
  padding: 0 20px;
  max-width: 800px;
  margin: 0 auto;
`

const TitleStl = styled.h1`
  color: #000;
  text-align: center; 
`


export const App = () => {

  return (
      <AppStl>
          <ContainerStl>
              <TitleStl>Тестовое задание</TitleStl>
              <Form/>
              <ResultBlock/>
          </ContainerStl>
      </AppStl>
  )
}

