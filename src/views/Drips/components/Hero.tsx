import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import { FLV_BACKGROUND_GRADIENT_LIGHT } from '../../../style/FlavorsSectionStyles';


const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 24px;
`

const Blurb = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 600;
`
const StyledHero = styled.div`
  background-image: ${FLV_BACKGROUND_GRADIENT_LIGHT};
  padding-bottom: 40px;
  padding-top: 40px;
  margin-bottom: 32px;
`
const Hero = () => {

  return (
    <StyledHero>
      <Container>
        <Title>DRIPS</Title>
        <Blurb>Access to a variety of vetted BSC projects and community partnerships through "drips" that change with each new partner.</Blurb>
      </Container>
    </StyledHero>
  )
}

export default Hero
