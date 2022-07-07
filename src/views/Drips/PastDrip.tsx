import React from 'react'
import { dripsConfig } from '../../config/constants'
import { Drip } from '../../config/constants/types'
import IfoCard from './components/IfoCard'
import IfoCards from './components/IfoCards'
import Title from './components/Title';
import PastDripsHero from './components/PastDripsHero';
import PastDripHero from './components/PastDripsHero';
import styled from 'styled-components'

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

const inactiveDrip: Drip[] = dripsConfig.filter((drip) => !drip.isActive)

const PastDrips = () => {
  return (
    <div>
      <Header>Past Drips</Header>
      <IfoCards>
        {/* <PastDripHero /> */}
        {inactiveDrip.map((drip) => (
          <IfoCard key={drip.id} ifo={drip} />
        ))}
      </IfoCards>
    </div>
  )
}

export default PastDrips
