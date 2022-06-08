import styled from 'styled-components'
import { colors } from '../../utils/css'
//*fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledSubmitButton = styled.button`
    align-self: center;
    margin: ${(props) => (props.$basic ? '0 5px ' : '20px 0 50px 0')};
    border: none;
    background: ${colors.colorPrimary};
    padding: ${(props) => (props.$basic ? '5px 10px' : '10px 20px')};
    color: white;
    border-radius: 5px;
    cursor: pointer;
    display: ${({ isSelected }) => (isSelected === false ? 'none' : 'block')};
    position: relative;
    bottom: ${(props) => (props.$basic ? '3px' : 'inherit')};
    border: none;
`
const StyledCloseButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: -13px;
    right: -13px;
    cursor: pointer;
    color: white;
    background: #000000;
`

const StyledXmark = styled.span`
    font-size: 1rem;
`

export default function Button({ type, text, icon, action, isItSelected }) {
    switch (type) {
        case 'submit':
            return (
                <StyledSubmitButton
                    type={`${type}`}
                >{`${text}`}</StyledSubmitButton>
            )
        case 'close':
            return (
                <StyledCloseButton onClick={action}>
                    <StyledXmark>
                        <FontAwesomeIcon icon={icon} />
                    </StyledXmark>
                </StyledCloseButton>
            )
        case 'basic':
            return (
                <StyledSubmitButton
                    $basic
                    onClick={action}
                    isSelected={isItSelected}
                >
                    {text}
                </StyledSubmitButton>
            )

        default:
            return
    }
}
