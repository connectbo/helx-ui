import React from 'react'
import { Container } from '../../components/layout'
import { Title, Heading, Subheading, Paragraph } from '../../components/typography'
import { List } from '../../components/list'
import { Link } from '../../components/link'
import { Button } from '../../components/button'
import { useAuth } from '../../contexts'

export const Profile = () => {
  const auth = useAuth()
  return (
    <Container>
      <Title>My Accouunt</Title>
      
      <Heading>{ auth.user.username } ({ auth.user.email }) </Heading>

      <Button onClick={ auth.logout }>LOGOUT</Button>

      <Subheading>Profile</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>

      <Subheading>Preferences</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>

      <h3>Saved Searches</h3>

      <List bullets="disc" items={
        auth.user.savedSearches.map(item => {
          const { query, page } = JSON.parse(item)
          const itemUrl = `/search?q=${ query }&p=${ page }`
          return <div key={ item }>"{ query }" - page { page } - <Link to={ itemUrl }>{ itemUrl }</Link></div>
        })
      } />

      <Subheading>Another Section</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
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
