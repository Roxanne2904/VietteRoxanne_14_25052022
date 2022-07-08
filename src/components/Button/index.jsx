//*fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//*Styled
import { StyledSubmitButton, StyledCloseButton, StyledXmark } from './styled'
import PropTypes from 'prop-types'

/**
 * it returns a button component.
 * @returns { HTMLElements } It return a React Component.
 */
export default function Button({
    type,
    text,
    icon,
    action,
    isItSelected,
    width,
    trash,
}) {
    switch (type) {
        case 'submit':
            return (
                <StyledSubmitButton
                    width={width}
                    type={`${type}`}
                >{`${text}`}</StyledSubmitButton>
            )
        case 'icon':
            return (
                <StyledCloseButton onClick={action} trash={trash}>
                    <StyledXmark>
                        <FontAwesomeIcon icon={icon} />
                    </StyledXmark>
                </StyledCloseButton>
            )
        case 'basic':
            if (isItSelected === undefined) {
                return (
                    <StyledSubmitButton $basic onClick={action}>
                        {text}
                    </StyledSubmitButton>
                )
            } else {
                return (
                    <StyledSubmitButton
                        $rmvEmployee
                        $basic
                        onClick={action}
                        isSelected={isItSelected}
                    >
                        {text}
                    </StyledSubmitButton>
                )
            }

        default:
            return
    }
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.object,
    action: PropTypes.func,
    isItSelected: PropTypes.bool,
    width: PropTypes.number.isRequired,
    trash: PropTypes.bool,
}

Button.defaultProps = {
    width: window.innerWidth,
    trash: false,
    isItSelected: undefined,
    icon: {},
}
