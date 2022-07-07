import Title from '../Title'
import {
    StyledLink,
    StyledHeader,
    StyledLinkTxt,
    StyledLinkIcon,
} from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = ({ linkTxt, linkTo, icon, width }) => {
    return (
        <StyledHeader>
            <StyledLink to={'/'}>
                <Title text={'HRnet'} type="h1" width={width} />
            </StyledLink>

            <StyledLink to={`${linkTo}`} $headerLink width={width}>
                <StyledLinkIcon>
                    <FontAwesomeIcon icon={icon} />
                </StyledLinkIcon>
                <StyledLinkTxt>{linkTxt}</StyledLinkTxt>
            </StyledLink>
        </StyledHeader>
    )
}

export default Header
