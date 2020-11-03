import React from 'react'
import { Container } from '../../components/layout'
import { Title, Paragraph } from '../../components/typography'
import { Button } from '../../components/button'
import { useAuth } from '../../contexts'

export const Login = () => {
  const auth = useAuth()
  return (
    <Container>
      <Title>You are not logged in</Title>
      <Button onClick={ auth.login }>LOGIN</Button>
      
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
    </Container>
  )
}
