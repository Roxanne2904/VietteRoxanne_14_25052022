import styled from 'styled-components'
import { colors } from '../../utils/css'
//*fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledSubmitButton = styled.button`
    align-self: center;
    margin: ${(props) => (props.$basic ? '0 5px ' : '20px 0 50px 0')};
    border: none;
    background: ${colors.colorPrimary};
    padding: ${(props) =>
        props.$basic
            ? '5px 10px'
            : props.width > 950
            ? '10px 40px'
            : '10px 20px'};
    color: white;
    border-radius: 5px;
    cursor: pointer;
    ${({ isSelected }) =>
        isSelected === false ? 'display: none' : 'display: block'};
    position: relative;
    bottom: ${(props) =>
        props.$basic
            ? props.$rmvEmployee
                ? '3px'
                : 'inherit'
            : props.width > 950
            ? '69px'
            : 'inherit'};
    ${({ width }) => width > 950 && 'right: 70px;'}
    border: none;
`
const StyledCloseButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    ${({ trash }) => !trash && 'position: absolute;top: -13px;right: -13px;'}
    cursor: pointer;
    color: white;
    background: ${({ trash }) => (trash ? colors.colorPrimary : '#000000')};
    border: none;
`

const StyledXmark = styled.span`
    font-size: 1rem;
`

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
