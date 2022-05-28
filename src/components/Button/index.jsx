import styled from 'styled-components'
import { colors } from '../../utils/css'
//*fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledSubmitButton = styled.button`
    align-self: center;
    margin: 20px 0 50px 0;
    border: none;
    background: ${colors.colorPrimary};
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
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

export default function Button({ type, text, icon, action }) {
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

        default:
            return
    }
}
