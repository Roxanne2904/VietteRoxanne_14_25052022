import { StyledTitle, StyledSecondariesTitle } from './styled'

export default function Title({ text, type, width }) {
    switch (type) {
        case 'h1':
            return (
                <StyledTitle>
                    <h1>{text}</h1>
                </StyledTitle>
            )
        case 'h2':
            return (
                <StyledSecondariesTitle width={width}>
                    <h2>{text}</h2>
                </StyledSecondariesTitle>
            )
        default:
            return
    }
}
