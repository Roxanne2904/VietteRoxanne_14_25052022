import {
    StyledUlBlockDatasEmployee,
    StyledLiBlockData,
    StyledCategories,
} from './styled'
import PropTypes from 'prop-types'

/**
 * it returns a Card component.
 * @returns { HTMLElements } It return a React Component.
 */
export const Card = ({ rowData, width }) => {
    if (rowData.length !== 0) {
        return (
            <StyledUlBlockDatasEmployee width={width}>
                <StyledLiBlockData>
                    <StyledCategories>FN:</StyledCategories>{' '}
                    {rowData[0].firstName}{' '}
                </StyledLiBlockData>
                <StyledLiBlockData>
                    <StyledCategories>LN:</StyledCategories>{' '}
                    {rowData[0].lastName}{' '}
                </StyledLiBlockData>
                <StyledLiBlockData>
                    <StyledCategories>City:</StyledCategories> {rowData[0].city}{' '}
                </StyledLiBlockData>
                <StyledLiBlockData>
                    <StyledCategories>Depmt:</StyledCategories>{' '}
                    {rowData[0].department}{' '}
                </StyledLiBlockData>
                <StyledLiBlockData>
                    <StyledCategories>S-Date:</StyledCategories>{' '}
                    {rowData[0].startDate}{' '}
                </StyledLiBlockData>
                <StyledLiBlockData>
                    <StyledCategories>D-O-Birth:</StyledCategories>{' '}
                    {rowData[0].dateOfBirth}{' '}
                </StyledLiBlockData>
                <StyledLiBlockData>
                    <StyledCategories>State:</StyledCategories>{' '}
                    {rowData[0].states}{' '}
                </StyledLiBlockData>
                <StyledLiBlockData>
                    <StyledCategories>Street:</StyledCategories>{' '}
                    {rowData[0].street}{' '}
                </StyledLiBlockData>
                <StyledLiBlockData>
                    <StyledCategories>ZipC:</StyledCategories>{' '}
                    {rowData[0].zipCode}{' '}
                </StyledLiBlockData>
            </StyledUlBlockDatasEmployee>
        )
    }
}
export default Card

Card.propTypes = {
    rowData: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
}

Card.defaultProps = {
    width: window.innerWidth,
}
