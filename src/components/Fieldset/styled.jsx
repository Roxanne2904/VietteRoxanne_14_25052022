//*styled
import styled from 'styled-components'
//*utils
import { colors, radius, display, font, numbers } from '../../utils/css'

export const StyledAddress = styled.fieldset`
    margin-top: ${numbers.ten}px;
    padding-bottom: ${numbers.twenty}px;
    border: ${display.none};
    box-shadow: ${numbers.zero}px ${numbers.zero}px 3px ${colors.colorPrimary};
    border-radius: ${radius.main};
`

export const StyledLegend = styled.legend`
    position: ${display.relative};
    top: 25px;
    font-size: ${font.main};
    color: ${colors.colorPrimary};
    margin: ${numbers.twenty}px;
    right: ${numbers.twenty}px;
    font-weight: 600;
`
