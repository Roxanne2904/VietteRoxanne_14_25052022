import styled from 'styled-components'
//*CSS
import { MIN_WIDTH_PATTERN, colors, radius } from '../../utils/css/index'

export const StyledInput = styled.input`
    ${MIN_WIDTH_PATTERN}
    border:none;
    border-radius: ${radius.main};
    transition: all 300ms ease-in-out;
    box-shadow: 0px 0px 2px ${colors.colorPrimary};
    &:focus {
        outline: none;
        transform: scale(1.05);
        box-shadow: 0px 0px 3px ${colors.colorPrimary};
    }
`
export const StyledErrorMessage = styled.span`
    color: red;
    font-size: 0.8rem;
`
