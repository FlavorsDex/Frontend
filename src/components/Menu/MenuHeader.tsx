import { useTranslation } from 'contexts/Localization'
import config from './config/config'
import UserMenu from './UserMenu'
import Container from '../Layout/Container'
import Row from '../Layout/Row'
import { MdOutlineAccountCircle } from 'react-icons/md';
import { NavLink } from 'react-router-dom'
import FlavorLogo from '../Logo/FlavorLogo.svg'


const MenuHeader = (props) => {
    const { t } = useTranslation()
    return (
        <Container py=".5rem" background="#FFFFFF" style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
            <Row>
                <NavLink to="/">
                    <img src={FlavorLogo}/>
                </NavLink>
                {
                    config(t).map((link, index) => (
                    <NavLink key={"menuheader"+index} to={link.href} color="black" style={{padding: "0 1rem", marginLeft: index === 0 && "auto"}}>
                        {t(link.label)}
                    </NavLink>
                    ))
                }
                <NavLink to="#" color="black" style={{padding: "0 1rem"}}>
                    <MdOutlineAccountCircle fontSize="2rem"/>
                </NavLink>
                <div style={{padding: "0 1rem"}}>
                    <UserMenu></UserMenu>
                </div>
            </Row>
        </Container>
    )}
    
export default MenuHeader