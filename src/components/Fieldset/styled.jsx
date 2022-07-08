//*styled
import styled from 'styled-components'
//*utils
import {
    colors,
    radius,
    display,
    font,
    numbers,
    POSITION_RELATIVE,
    COLOR_PRIMARY,
} from '../../utils/css'

export const StyledAddress = styled.fieldset`
    margin-top: ${numbers.ten}px;
    padding-bottom: ${numbers.twenty}px;
    border: ${display.none};
    box-shadow: ${numbers.zero}px ${numbers.zero}px 3px ${colors.colorPrimary};
    border-radius: ${radius.main};
`

export const StyledLegend = styled.legend`
    ${POSITION_RELATIVE}
    top: 25px;
    font-size: ${font.main};
    ${COLOR_PRIMARY}
    margin: ${numbers.twenty}px;
    right: ${numbers.twenty}px;
    font-weight: 600;
`
