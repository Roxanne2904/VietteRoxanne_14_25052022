import styled from 'styled-components'
import {
    colors,
    display,
    numbers,
    DISPLAY_BLOCK,
    POSITION_RELATIVE,
    POSITION_ABSOLUTE,
} from '../../utils/css'

export const StyledSubmitButton = styled.button`
    align-self: ${(props) =>
        props.$basic
            ? `${display.center}`
            : props.width < 950
            ? `${display.center}`
            : 'baseline'};
    margin: ${(props) =>
        props.$basic
            ? '0 5px '
            : props.width < 950
            ? `${numbers.twenty}px ${numbers.zero} 50px ${numbers.zero}`
            : `${numbers.twenty}px ${numbers.zero} 50px 15px`};
    border: none;
    background: ${colors.colorPrimary};
    padding: ${(props) =>
        props.$basic
            ? `5px ${numbers.ten}px`
            : props.width > 950
            ? `${numbers.ten}px 40px`
            : `${numbers.ten}px ${numbers.twenty}px`};
    color: ${colors.white};
    border-radius: 5px;
    cursor: pointer;
    ${({ isSelected }) =>
        isSelected === false ? `display: ${display.none}` : `${DISPLAY_BLOCK}`};
    border: ${display.none};
    ${(props) =>
        !props.$basic &&
        props.width > 950 &&
        `${POSITION_RELATIVE} bottom:58px;`}
`
export const StyledCloseButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    ${({ trash }) => !trash && `${POSITION_ABSOLUTE} top: -13px; right: -13px;`}
    cursor: pointer;
    color: ${colors.white};
    background: ${({ trash }) => (trash ? colors.colorPrimary : '#000000')};
    border: ${display.none};
`

export const StyledXmark = styled.span`
    font-size: ${numbers.one}rem;
`
