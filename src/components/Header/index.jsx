import Title from '../Title'
import {
    StyledLink,
    StyledHeader,
    StyledLinkTxt,
    StyledLinkIcon,
} from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

/**
 * This returns a header component.
 * @returns { HTMLElements } It return a React Component.
 */
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

Header.propTypes = {
    linkTxt: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    icon: PropTypes.shape({
        icon: PropTypes.array.isRequired,
        iconName: PropTypes.string.isRequired,
        prefix: PropTypes.string.isRequired,
    }),
    width: PropTypes.number.isRequired,
}

Header.defaultProps = {
    width: window.innerWidth,
}
