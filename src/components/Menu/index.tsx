import MenuHeader from "./MenuHeader"
import MenuFooter from "./MenuFooter"


const Menu = (props) => {
  // const _binanceChainListener = async () =>
  //   new Promise<void>((resolve) =>
  //     Object.defineProperty(window, 'BinanceChain', {
  //       get() {
  //         return this.bsc
  //       },
  //       set(bsc) {
  //         this.bsc = bsc

  //         resolve()
  //       },
  //     }),
  // )

  // useEffect(() => {
  //   const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames

  //   if (!connectorId) {
  //     const isConnectorBinanceChain = connectorId === ConnectorNames.BSC
  //     const isBinanceChainDefined = Reflect.has(window, 'BinanceChain')

  //     // Currently BSC extension doesn't always inject in time.
  //     // We must check to see if it exists, and if not, wait for it before proceeding.
  //     if (!isConnectorBinanceChain && !isBinanceChainDefined) {
  //     console.log(account);
  //     _binanceChainListener().then(() => login(connectorId))

  //       return
  //     }
  //     login("injected" as ConnectorNames)
  //   }
  //   console.log(account);
  // },)

  return (
    // <UikitMenu
    //   userMenu={<UserMenu />}
    //   globalMenu={<GlobalSettings />}
    //   banner={showPhishingWarningBanner && <PhishingWarningBanner />}
    //   isDark={isDark}
    //   toggleTheme={toggleTheme}
    //   currentLang={currentLanguage.code}
    //   langs={languageList}
    //   setLang={setLanguage}
    //   cakePriceUsd={cakePriceUsd.toNumber()}
    //   links={config(t)}
    //   subLinks={activeMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
    //   footerLinks={footerLinks(t)}
    //   activeItem={activeMenuItem?.href}
    //   activeSubItem={activeSubMenuItem?.href}
    //   buyCakeLabel={t('Buy CAKE')}
    //   {...props}
    // />
    <>
      <MenuHeader/>
        {props.children}
      <MenuFooter/>
    </>
  )
}

export default Menu
