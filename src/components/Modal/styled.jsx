import styled from 'styled-components'
//*Utils
import { colors, radius, POSITION_PATTERN } from '../../utils/css'

export const StyledTxtModal = styled.p`
    display: ${({ toggleModal }) => (toggleModal === 'open' ? 'flex' : 'none')};
    border-radius: ${radius.secondary};
    background: ${colors.white};
    box-shadow: 0px 0px 10px #000000;
    color: ${colors.colorPrimary};
    font-weight: bold;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background: #f1f1f1;
    padding: 17px 31px;
    width: 20%;
`
export const StyledModalContent = styled.div`
    background-color: #000000;
    opacity: 0.72;
    ${POSITION_PATTERN}
`
export const StyledModal = styled.div`
    ${POSITION_PATTERN}
`
