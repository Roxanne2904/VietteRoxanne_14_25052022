export const Card = ({ rowData }) => {
    if (rowData.length !== 0) {
        return (
            <ul>
                <li>
                    <span>FN:</span> {rowData[0].firstName}{' '}
                </li>
                <li>
                    <span>LN:</span> {rowData[0].lastName}{' '}
                </li>
                <li>
                    <span>City:</span> {rowData[0].city}{' '}
                </li>
                <li>
                    <span>Depmt:</span> {rowData[0].department}{' '}
                </li>
                <li>
                    <span>S-Date:</span> {rowData[0].startDate}{' '}
                </li>
                <li>
                    <span>D-O-Birth:</span> {rowData[0].dateOfBirth}{' '}
                </li>
                <li>
                    <span>State:</span> {rowData[0].states}{' '}
                </li>
                <li>
                    <span>Street:</span> {rowData[0].street}{' '}
                </li>
                <li>
                    <span>ZipC:</span> {rowData[0].zipCode}{' '}
                </li>
            </ul>
        )
    }
}
export default Card
