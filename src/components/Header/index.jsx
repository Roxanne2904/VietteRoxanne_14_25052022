import Title from '../Title'
import {
    StyledLink,
    StyledHeader,
    StyledLinkTxt,
    StyledLinkIcon,
} from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = ({ linkTxt, linkTo, icon }) => {
    return (
        <StyledHeader>
            <StyledLink to={'/'}>
                <Title text={'HRnet'} type="h1" />
            </StyledLink>

            <StyledLink to={`${linkTo}`} $headerLink>
                <StyledLinkIcon>
                    <FontAwesomeIcon icon={icon} />
                </StyledLinkIcon>
                <StyledLinkTxt>{linkTxt}</StyledLinkTxt>
            </StyledLink>
        </StyledHeader>
    )
}

export default Header
