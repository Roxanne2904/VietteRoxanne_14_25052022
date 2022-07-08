import { StyledTitle, StyledSecondariesTitle } from './styled'
import PropTypes from 'prop-types'

/**
 * This component returns different kind of title.
 * @returns { HTMLElements } It return a React Component.
 */
export default function Title({ text, type, width }) {
    switch (type) {
        case 'h1':
            return (
                <StyledTitle width={width}>
                    <h1>{text}</h1>
                </StyledTitle>
            )
        case 'h2':
            return (
                <StyledSecondariesTitle width={width} text={text}>
                    <h2>{text}</h2>
                </StyledSecondariesTitle>
            )
        default:
            return
    }
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
}

Title.defaultProps = {
    width: window.innerWidth,
}
