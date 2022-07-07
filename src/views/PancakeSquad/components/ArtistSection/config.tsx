import React from 'react'
import { InstagramIcon, TwitterIcon, TelegramIcon, DiscordIcon, GithubIcon } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


type ArtistConfigType = {
  t: ContextApi['t']
  isDark: boolean
}

const artistConfigBuilder = ({ t, isDark }: ArtistConfigType) => ({
  headingText: t('Meet the Artist'),
  bodyText: [
    t('The birthplace of Cecy is truly unknown'),
    t('But legend tells us, she was sailing alone'),
    t('Beyond the mountains, across the sea'),
    t('When she found an island, said “this is for me!”'),
    t('‘Twas full of rabbits, who caught her attention'),
    t('Making neat stuff beyond her comprehension'),
    t('The bunnies were working in a big ol’ kitchen'),
    t('Cooking hot pancakes for their big ol’ mission:'),
    t('To drizzle in syrup and hand them out soon'),
    t('So that bunnies worldwide may fly to the moon.'),
  ],
  buttons: [
    {
      to: 'https://twitter.com/FlaborsBSC/',
      text: t('Follow on Twitter'),
      external: true,
      icon: <TwitterIcon fillColor="white" />,
    },
    {
      to: 'https://t.me/FlaborsBSC/',
      text: t('Follow on Telegram'),
      external: true,
      icon: <TelegramIcon color="white" />,
    },
    {
      to: 'https://discord.gg/6QnCxUQv8V/',
      text: t('Follow on Discord'),
      external: true,
      icon: <DiscordIcon style={{fill: "white"}}/>,
    },
    {
      to: 'https://www.youtube.com/channel/UCSgHGLH-IkUbBIQYfSjVoFA/',
      text: t('Visit Youtube'),
      external: true,
      icon: <FaYoutube color="white" />,
    },
    {
      to: 'https://www.facebook.com/groups/475542200437397/',
      text: t('Follow on Facebook'),
      external: true,
      icon: <FaFacebook style={{fill: "white"}}/>,
    },
    {
      to: 'https://www.instagram.com/flaborsbsc/',
      text: t('Follow on Instagram'),
      external: true,
      icon: <InstagramIcon color="white" />,
    },
    {
      to: 'https://github.com/FlavorsDeFi/',
      text: t('Visit Github'),
      external: true,
      icon: <GithubIcon color="white" />,
    },
  ],
  image: { src: `/images/pancakeSquad/artist${isDark ? '-dark' : ''}.png`, alt: 'Chef Cecy bio' },
})

export default artistConfigBuilder
