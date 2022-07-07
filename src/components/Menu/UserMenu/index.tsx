import React, {useState} from 'react'
import { useWeb3React } from '@web3-react/core'
import {
  Flex,
  LogoutIcon,
  useModal,
  UserMenu as UIKitUserMenu,
  UserMenuDivider,
  UserMenuItem,
  Button,
  useWalletModal
} from '@pancakeswap/uikit'
import history from 'routerHistory'
import useAuth from 'hooks/useAuth'
import { useProfile } from 'state/profile/hooks'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { FetchStatus, useGetBnbBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import WalletModal, { WalletView, LOW_BNB_BALANCE } from './WalletModal'
import ProfileUserMenuItem from './ProfileUserMenutItem'
import WalletUserMenuItem from './WalletUserMenuItem'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu
} from "styled-dropdown-component";


const UserMenu = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { balance, fetchStatus } = useGetBnbBalance()
  const [onPresentWalletModal] = useModal(<WalletModal initialView={WalletView.WALLET_INFO} />)
  const [onPresentTransactionModal] = useModal(<WalletModal initialView={WalletView.TRANSACTIONS} />)
  const hasLowBnbBalance = fetchStatus === FetchStatus.SUCCESS && balance.lte(LOW_BNB_BALANCE)
  const [hidden, setHidden] = useState(true)
  const handleOpenCloseDropdown = (value) => {
    setHidden(value);
  }
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  const onLogout = () => {
    setHidden(true);
    logout();
  }

  if (!account) {
    return <MdOutlineAccountBalanceWallet
            onClick={!account?onPresentConnectModal:null}
            fontSize="2rem"
            cursor="pointer"
            title="Connect Wallet"
          />
  }
  const shortAccount = account?.slice(0, 2)+"..."+account?.slice(-4, account?.length)

  return (
    // <UIKitUserMenu account={account} avatarSrc={avatarSrc}>
    //   <WalletUserMenuItem hasLowBnbBalance={hasLowBnbBalance} onPresentWalletModal={onPresentWalletModal} />
    //   <UserMenuItem as="button" onClick={onPresentTransactionModal}>
    //     {t('Transactions')}
    //   </UserMenuItem>
    //   <UserMenuDivider />
    //   <UserMenuItem as="button" onClick={() => history.push(`${nftsBaseUrl}/profile/${account.toLowerCase()}`)}>
    //     {t('Your NFTs')}
    //   </UserMenuItem>
    //   <ProfileUserMenuItem isLoading={isLoading} hasProfile={hasProfile} />
    //   <UserMenuDivider />
    //   <UserMenuItem as="button" onClick={logout}>
    //     <Flex alignItems="center" justifyContent="space-between" width="100%">
    //       {t('Disconnect')}
    //       <LogoutIcon />
    //     </Flex>
    //   </UserMenuItem>
    // </UIKitUserMenu>
    <Dropdown 
      onMouseOver={() => handleOpenCloseDropdown(false)}
      onMouseOut={() => handleOpenCloseDropdown(true)}
    >
      <Flex>
        <MdOutlineAccountBalanceWallet
          fontSize="2rem"
          cursor="pointer"
        />
        <span style={{margin: "auto", paddingLeft: ".5rem"}}>
          {shortAccount}
        </span>
      </Flex>
      <DropdownMenu right={true} hidden={hidden}  style={{color:"#000000"}}>
        <DropdownItem>
          <WalletUserMenuItem hasLowBnbBalance={hasLowBnbBalance} onPresentWalletModal={onPresentWalletModal} />
        </DropdownItem>
        <DropdownItem>
          <UserMenuItem as="button" style={{color:"black"}} onClick={onPresentTransactionModal}>
            {t('Transactions')}
          </UserMenuItem>
        </DropdownItem>
        {/* <DropdownItem>
          <UserMenuItem as="button" style={{color:"black"}} onClick={() => history.push(`${nftsBaseUrl}/profile/${account.toLowerCase()}`)}>
            {t('Your NFTs')}
          </UserMenuItem>
        </DropdownItem>
        <DropdownItem>
          <ProfileUserMenuItem isLoading={isLoading} hasProfile={hasProfile} />
        </DropdownItem> */}
        <UserMenuDivider />
        <DropdownItem>
          <UserMenuItem as="button" style={{color:"black"}} onClick={onLogout}>
            <Flex alignItems="center" justifyContent="space-between" width="100%">
              {t('Disconnect')}
              <LogoutIcon />
            </Flex>
          </UserMenuItem>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserMenu
