
import { Drip } from './types'


// gets the block number form the starting timestamp
//   (await web3.eth.getBlockNumber())+ ((1634954400-(now()._timestamp))/3)


const drips: Drip[] = [
   {
      id: 'busd',
      isActive: true,
      address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      name: 'Binance USD',
      tokenSymbol: 'BUSD',
      subTitle: 'Binance USD Stable Coin',
      description: 'BUSD was created in partnership between the largest and most trusted companies in the crypto space.',
      tokenDecimals: 9,
      projectSiteURL: 'https://binance.com/',

      
      // pancake swap crap, remove later, breaks without it for now
      launchDate: '',
      launchTime: '',
      saleAmount: '',
      raiseAmount: '',
      cakeToBurn: '',
      projectSiteUrl: '',
      currency: '',
      currencyAddress: '',
      releaseBlockNumber: 0,
      campaignId: '',
      // pancake swap crap, remove later, breaks without it for now
    },
    {
      id: 'cake',
      isActive: true,
      address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      name: 'PancakeSwap Token',
      tokenSymbol: 'Cake',
      subTitle: 'The moon is made of pancakes.',
      description: 'Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.',
      tokenDecimals: 9,
      projectSiteURL: 'https://pancakeswap.finance/',
      
      // pancake swap crap, remove later, breaks without it for now
      launchDate: '',
      launchTime: '',
      saleAmount: '',
      raiseAmount: '',
      cakeToBurn: '',
      projectSiteUrl: '',
      currency: '',
      currencyAddress: '',
      releaseBlockNumber: 0,
      campaignId: '',
      // pancake swap crap, remove later, breaks without it for now
    },
    {
      id: 'revival',
      isActive: false,
      address: '0x7eaee60040135f20f508a393ca400ded339d654e',
      name: 'Revival',
      tokenSymbol: 'RVL',
      subTitle: 'Empowering Holders To Invest In Themselves',
      description: 'Revival is a community-based Binance smart chain project which strives to evolve and better the current climate within the DeFi space.',
      tokenDecimals: 9,
      projectSiteURL: 'https://www.revivaldefi.com/#',
      
      // pancake swap crap, remove later, breaks without it for now
      launchDate: '',
      launchTime: '',
      saleAmount: '',
      raiseAmount: '',
      cakeToBurn: '',
      projectSiteUrl: '',
      currency: '',
      currencyAddress: '',
      releaseBlockNumber: 0,
      campaignId: '',
      // pancake swap crap, remove later, breaks without it for now
    },
    {
      id: 'useless',
      isActive: false,
      address: '0x2cd2664ce5639e46c6a3125257361e01d0213657',
      name: 'Useless',
      tokenSymbol: 'USELESS',
      subTitle: 'The Only Thing Useless About Us Is The Name',
      description: 'We’re aiming to make DeFi accessible to crypto and non-crypto enthusiasts alike by building a software ecosystem around DeFi.',
      tokenDecimals: 9,
      projectSiteURL: 'https://uselesscrypto.com/',
      
      // pancake swap crap, remove later, breaks without it for now
      launchDate: '',
      launchTime: '',
      saleAmount: '',
      raiseAmount: '',
      cakeToBurn: '',
      projectSiteUrl: '',
      currency: '',
      currencyAddress: '',
      releaseBlockNumber: 0,
      campaignId: '',
      // pancake swap crap, remove later, breaks without it for now
    },    
    {
      id: 'doge',
      isActive: false,
      address: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
      name: 'Dogecoin',
      tokenSymbol: 'DOGE',
      subTitle: 'Do Only Good Everyday',
      description: 'Doge, the peoples cryptocurrency, is more than a coin and it’s own blockchain, it’s a motto, a lifestyle of giving and doing good everyday.',
      tokenDecimals: 9,
      projectSiteURL: 'https://dogecoin.com/',
      
      // pancake swap crap, remove later, breaks without it for now
      launchDate: '',
      launchTime: '',
      saleAmount: '',
      raiseAmount: '',
      cakeToBurn: '',
      projectSiteUrl: '',
      currency: '',
      currencyAddress: '',
      releaseBlockNumber: 0,
      campaignId: '',
      // pancake swap crap, remove later, breaks without it for now
    },
    {
      id: 'floki',
      isActive: false,
      address: '0x43f11c02439e2736800433b4594994bd43cd066d',
      name: 'Floki',
      tokenSymbol: 'FLOKI',
      subTitle: 'Meet Floki Inu, The Community-Owned Crypto',
      description: 'FLOKI combines utility and the power of a community, aims to be a top 10 crypto project, and plans to kickstart the next crypto revolution.',
      tokenDecimals: 9,
      projectSiteURL: 'https://theflokiinu.com/',
      
      // pancake swap crap, remove later, breaks without it for now
      launchDate: '',
      launchTime: '',
      saleAmount: '',
      raiseAmount: '',
      cakeToBurn: '',
      projectSiteUrl: '',
      currency: '',
      currencyAddress: '',
      releaseBlockNumber: 0,
      campaignId: '',
      // pancake swap crap, remove later, breaks without it for now
    },    
    {
      id: 'mooney',
      isActive: false,
      address: '0x98631c69602083d04f83934576a53e2a133d482f',
      name: 'xMooney',
      tokenSymbol: 'xM',
      subTitle: 'xMooney Decentralized Mining',
      description: 'The xMooney Mining Network is outward-focused, leveraging rewards from multiple cryptocurrencies such as Ethereum, Bitcoin, Monero, and Ravencoin  bringing value back to create resiliency and long-term sustainability in the project.',
      tokenDecimals: 9,
      projectSiteURL: 'https://www.xmooneytoken.com/',
      
      // pancake swap crap, remove later, breaks without it for now
      launchDate: '',
      launchTime: '',
      saleAmount: '',
      raiseAmount: '',
      cakeToBurn: '',
      projectSiteUrl: '',
      currency: '',
      currencyAddress: '',
      releaseBlockNumber: 0,
      campaignId: '',
      // pancake swap crap, remove later, breaks without it for now
    },    
    {
      id: 'safeearn',
      isActive: false,
      address: '0x099f551eA3cb85707cAc6ac507cBc36C96eC64Ff',
      name: 'SafeEarn',
      tokenSymbol: 'SAFEEARN',
      subTitle: 'Safely back to the Moon',
      description: 'SafeEarn is a risk-free passive income platform. Earn popular high-yield tokens seamlessly through staking. No risk, no effort.',
      tokenDecimals: 9,
      projectSiteURL: 'https://www.safearn.money/',
      
      // pancake swap crap, remove later, breaks without it for now
      launchDate: '',
      launchTime: '',
      saleAmount: '',
      raiseAmount: '',
      cakeToBurn: '',
      projectSiteUrl: '',
      currency: '',
      currencyAddress: '',
      releaseBlockNumber: 0,
      campaignId: '',
      // pancake swap crap, remove later, breaks without it for now
    },
  ]
  
  
export default drips
