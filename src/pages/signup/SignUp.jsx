import React from 'react'
import { Container, Wrapper, Title, Form, Input, Agreement, Button } from './SignUpStyled'


const SignUp = () => {
  return (
    <Container>

<Wrapper>
    <Title>Create an account</Title>
    <Form>
        <Input placeholder="Name" />
        <Input placeholder="Lastname" />
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm password" />
        <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>Create</Button>
    </Form>
</Wrapper>

    </Container>
  )
}

export default SignUp