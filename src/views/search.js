import React from 'react'
import { Container } from '../components/layout'
import { Title } from '../components/typography'
import { HelxSearch, SearchForm, SearchResults } from '../components/search'

export const Search = () => {
  return (
    <Container>
      <Title>Search</Title>

      <HelxSearch>
        <SearchForm />
        <SearchResults />
      </HelxSearch>
    </Container>
  )
}