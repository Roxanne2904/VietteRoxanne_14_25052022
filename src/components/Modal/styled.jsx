import styled from 'styled-components'
//*Utils
import { colors } from '../../utils/css'

export const StyledTxtModal = styled.p`
    display: ${({ toggleModal }) => (toggleModal === 'open' ? 'flex' : 'none')};
    border-radius: 8px;
    background: white;
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
    min-width: 30%;
`

export const StyledModalContent = styled.div`
    position: fixed;
    background-color: #000000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    min-height: 100vh;
    opacity: 0.72;
    z-index: -1;
`
export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    min-height: 100vh;
`
