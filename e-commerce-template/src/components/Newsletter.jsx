import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Component = styled.div`
    
`

const Title = styled.h1`

`

const Description = styled.p`
    
`
const InputContainer = styled.div`
    
`
const Input = styled.input`

`
const Button = styled.button`

`

const Newsletter = () => {
  return (
    <Component>
        <Title>Newletter</Title>
        <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima quisquam, voluptatem ratione aliquam corrupti accusamus itaque asperiores nemo suscipit.
        </Description>
        <InputContainer>
            <Input />
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
        
    </Component>
  )
}

export default Newsletter