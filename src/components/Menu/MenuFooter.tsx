import { useTranslation } from 'contexts/Localization'
import Container from '../Layout/Container'
import Row from '../Layout/Row'
import FooterBack from '../Logo/FooterBack.svg'
import artistConfigBuilder from 'views/PancakeSquad/components/ArtistSection/config'
import { Button, Flex } from '@pancakeswap/uikit'
import { StyledSocialButton } from 'views/PancakeSquad/components/ArtistSection/styles'
import { useTheme } from 'styled-components'


const MenuHeader = (props) => {
    const { t } = useTranslation()
    const { isDark } = useTheme()
    const { headingText, bodyText, buttons, image } = artistConfigBuilder({ t, isDark })
    return (
        <Container height="300px" mt="4rem" py=".5rem" backgroundImage={`url(${FooterBack})`} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
            <Row>
                <Flex
                    flexDirection='row'
                    justifyContent='center'
                    alignItems="center"
                    marginX="auto"
                >
                {buttons.map((button) => (
                    <StyledSocialButton
                        key={button.text}
                        mt={['16px', null, null, '180px']}
                        mr={['0', null, null, '16px']}
                        external={button.external}
                        href={button.to}
                    >
                        <Button 
                            width="100%"
                            style={{backgroundColor: "#cc2966"}}
                        >
                        {button.icon}
                        </Button>
                    </StyledSocialButton>
                ))}
                </Flex>
            </Row>
        </Container>
    )}
    
export default MenuHeader