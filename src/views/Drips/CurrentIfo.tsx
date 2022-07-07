import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image, CardHeader as UIKitCardHeader } from '@pancakeswap/uikit';
import { ifosConfig } from 'config/constants'

import { dripsConfig } from 'config/constants'
import IfoCard from './components/IfoCard'
import IfoCards from './components/IfoCards'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

const Header = styled.h4`
  margin-top: 77px;
  margin-bottom: 21px;
  font-family: Raleway;
  weight: 700;
  font-style: normal;
  font-size: 25px;
  line-height: 40px;
  text-align: center;
  color: #000000;
`;

const safeearnInfo = ifosConfig.find((ifo) => ifo.id == 'busd')
const mooneyInfo = ifosConfig.find((ifo) => ifo.id == 'cake')

const drip0 = dripsConfig.find((ifo) => ifo.id == 'busd')
const drip1 = dripsConfig.find((ifo) => ifo.id == 'cake')

const Ifo = () => {
  return (
    <div>
      <Header>Current Drips</Header>
      <IfoCards>
        <IfoCard ifo={drip0} />
        <IfoCard ifo={drip1} />
      </IfoCards>
    </div>
  )
}

export default Ifo
