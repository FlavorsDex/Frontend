import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, LinkExternal } from '@pancakeswap/uikit';
import { Ifo } from 'config/constants/types'
import { Drip } from 'config/constants/types'
export interface IfoCardProps {
  ifo: Ifo|Drip
}

const StyledIfoCard = styled(Card)<{ ifoId: string }>`
  background-image: ${({ ifoId }) => `url('/images/ifos/${ifoId}-bg.svg')`};
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 130px;
  margin-left: auto;
  margin-right: auto;
  max-width: 437px;
  width: 100%;
`

const DripCard = styled(Card)<{ ifoId: string }>`
  width: 550px;
  height: 128px;
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 8px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('/images/ifos/temp-avatar.svg');
  margin: 16px;
`;

const DripCardBody = styled.div`
  border-bottom: 1px solid #C4C4C4;
  height: 76px;
  display: flex;
  align-items: center;
`;

const DripCardFooter = styled.div`
  height: 52px;
  display: flex;
`;

const DripViewOnCoinMarketCap = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 160%;
  color: #C4C4C4;
  padding: 16px;
  flex-grow: 1;
`;

const DripFooterPink = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 160%;
  color: #FF006A;
  padding: 16px;
`;

const DripCoinSymbol = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 160%;
  color: #222222;
`;

const DripCoinDescription = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 160%;
  color: #FF006A;
`;

const DripCost = styled.div`
  font-weight: bold;
  font-size: 21px;
  line-height: 160%;
  text-align: right;
  color: #000000;
`;

const DripRate = styled.div`
  font-weight: bold;
  font-size: 21px;
  line-height: 160%;
  text-align: right;
  color: #000000;
`;

const IfoCard: React.FC<IfoCardProps> = ({ ifo }) => {
  const { id, name, subTitle, address } = ifo
  return (
    <>
      {/* <StyledIfoCard ifoId={id}>
        <CardBody>
          <IfoCardHeader presaleId={id} name={name} subTitle={subTitle} />        
          <Text>{ifo.description}</Text>
          <LinkExternal href={ `https://bscscan.com/address/${address}` }  style={{ margin: '' }}>
            {address}
          </LinkExternal>
          <LinkExternal href={ projectSiteUrl }  style={{ margin: '' }}>
            Project Website
          </LinkExternal>
        </CardBody>
      </StyledIfoCard> */}
      <DripCard ifoId={id}>
        <DripCardBody>
          <Avatar></Avatar>
          <div style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}>
            <DripCoinSymbol>{name}</DripCoinSymbol>
            <DripCoinDescription>{subTitle}</DripCoinDescription>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            margin: "16px",
          }}>
            <DripCost>$0.9999</DripCost>
            <DripRate>-0.03%</DripRate>
          </div>
        </DripCardBody>
        <DripCardFooter>
          <DripViewOnCoinMarketCap>View On Coinmarketcap.com</DripViewOnCoinMarketCap>
          <DripFooterPink>View Chart</DripFooterPink>
          <DripFooterPink>Copy Address</DripFooterPink>
        </DripCardFooter>
      </DripCard>
    </>
  )
}

export default IfoCard
