import React from 'react';
import { Container, Link, Wrapper, Title, Form, Input, Button } from './LoginStyled';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Inicia sesión</Title>
        <Form>
          <Input placeholder="Username" />

          <Input placeholder="Password" />
          <Button>Login</Button>
          <Link>No recuerdas la contraseña?</Link>
          <Link>Create una cuenta</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
