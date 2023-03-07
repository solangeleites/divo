import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import {Container, Title, Description, InputContainer, Input, Button} from './NewsletterStyled'

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Subscribe to receive the best discounts</Description>
    <InputContainer>
        <Input placeholder="Write your email here"/>
        <Button>
            <SendIcon />
        </Button>
    </InputContainer>
    </Container>
  )
}

export default Newsletter