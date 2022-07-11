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
    let items = [
        { category: rowData[0].firstName, id: 0, short: 'FirstN' },
        { category: rowData[0].lastName, id: 1, short: 'LastN' },
        { category: rowData[0].startDate, id: 2, short: 'StartD' },
        { category: rowData[0].department, id: 3, short: 'Departm' },
        { category: rowData[0].dateOfBirth, id: 4, short: 'DateOB' },
        { category: rowData[0].street, id: 5, short: 'Street' },
        { category: rowData[0].city, id: 6, short: 'City' },
        { category: rowData[0].states, id: 7, short: 'State' },
        { category: rowData[0].zipCode, id: 8, short: 'ZipC' },
    ]
    const listItems = items.map((elt) => (
        <StyledLiBlockData key={`${elt.id}-${elt.short}`}>
            <StyledCategories>{`${elt.short}: `}</StyledCategories>
            {elt.category}
        </StyledLiBlockData>
    ))
    if (rowData.length !== 0) {
        return (
            <StyledUlBlockDatasEmployee width={width}>
                {listItems}
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
