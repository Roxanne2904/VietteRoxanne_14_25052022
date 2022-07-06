import styled from 'styled-components'

//*Utils
import { display } from '../../utils/css/index'

export const StyledContainer = styled.div`
    display: ${display.flex};
    flex-direction: ${display.column};
    align-items: ${display.center};
    justify-content: ${display.center};
    margin-bottom: 100px;
`
