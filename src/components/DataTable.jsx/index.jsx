import { useState, useRef, useMemo, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css' //!core grid CSS, always needed
//!The first ag-grid.css is always needed. It's the core structural CSS needed by the grid.
//!Without this, the Grid will not work.
import 'ag-grid-community/dist/styles/ag-theme-alpine.css' //!optional theme CSS
//*components
import Button from '../../components/Button'
import Card from '../../components/Card/index'
//* selector
import { selectEmployees } from '../../utils/selectors'
//*actions
import { removedAnEmployee } from './actions'
//*utilsFunctions
import { createRowsDatas } from './utilsFunctions'
//*Utils

//*Styled
import {
    StyledFeatureContent,
    StyledDeleteQuestionContent,
    StyledQuestion,
    StyledButtonsContent,
    StyledPageSizeText,
    StyledPageSizeSelect,
    StyledPageSizeContent,
    StyledBackgroundPageSizeSelect,
} from './styled.jsx'

export default function DataTable({ width }) {
    //*store redux;
    const dispatch = useDispatch()
    const employees = useSelector(selectEmployees)
    //*---

    //*Local State
    const [rowSelected, setRowSelected] = useState(false)
    const [employeeName, setEmployeeName] = useState()
    const [currentRowData, setCurrentRowData] = useState([])
    const [height, setHeight] = useState(window.innerHeight)

    //*Rows ans Columns
    const [rowData, setRowData] = useState() // Set rowData to Array of Objects, one Object per Row
    const [columnDefs] = useState([
        {
            headerName: '#',
            width: 50,
            valueFormatter: (params) => {
                return `${parseInt(params.node.id) + 1}`
            },
            type: ['idColumn'],
        },
        { field: 'firstName', headerName: 'First Name' },
        { field: 'lastName', headerName: 'Last Name' },
        {
            field: 'startDate',
            headerName: 'Start Date',
            type: ['dateColumn', 'nonEditableColumn'],
            width: 170,
        },
        { field: 'department', headerName: 'Department' },
        {
            field: 'dateOfBirth',
            headerName: 'Date of Birth',
            type: ['dateColumn', 'nonEditableColumn'],
            width: 170,
        },
        { field: 'street', headerName: 'Street' },
        { field: 'city', headerName: 'City' },
        { field: 'states', headerName: 'State' },
        { field: 'zipCode', headerName: 'Zip Code', type: ['idZipCode'] },
    ])

    //*DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo(
        () => ({
            sortable: true,
            filter: 'agTextColumnFilter',
            floatingFilter: true,
            resizable: true,
            maxWidth: 250,
        }),
        []
    )
    //*columnType
    const columnTypes = useMemo(() => {
        return {
            nonEditableColumn: { editable: false },
            idZipCode: { resizable: false },
            idColumn: {
                filter: false,
                editable: false,
                sortable: false,
                floatingFilter: false,
                width: 55,
                minWidth: 55,
                resizable: false,
            },
            dateColumn: {
                // specify we want to use the date filter
                filter: 'agDateColumnFilter',
                // add extra parameters for the date filter
                filterParams: {
                    // provide comparator function
                    comparator: (filterLocalDateAtMidnight, cellValue) => {
                        // In the example application, dates are stored as dd/mm/yyyy
                        // We create a Date object for comparison against the filter date
                        const dateParts = cellValue.split('/')
                        const day = Number(dateParts[0])
                        const month = Number(dateParts[1]) - 1
                        const year = Number(dateParts[2])
                        const cellDate = new Date(year, month, day)
                        // Now that both parameters are Date objects, we can compare
                        if (cellDate < filterLocalDateAtMidnight) {
                            return -1
                        } else if (cellDate > filterLocalDateAtMidnight) {
                            return 1
                        } else {
                            return 0
                        }
                    },
                },
            },
        }
    }, [])

    const gridRef = useRef() // Optional - for accessing Grid's API

    const containerStyle = useMemo(
        () => ({ width: '100%', height: height > 700 ? '71%' : '85%' }),
        [height]
    )
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), [])

    //*Use Effect
    useEffect(() => {
        //*update Rows Datas
        setRowData(createRowsDatas(employees.employees))
        // //*Resize
        const updateDimensions = () => {
            const currentHeight = window.innerHeigh
            setHeight(currentHeight)
            gridRef.current.api.paginationGoToPage(4)
            gridRef.current.api.sizeColumnsToFit()
        }
        window.addEventListener('resize', updateDimensions)

        return () => window.removeEventListener('resize', updateDimensions)
    }, [employees.employees])

    //*useCallback
    const cellClickedListener = useCallback((event) => {
        setRowSelected(true)
        setEmployeeName(`${event.data.firstName} ${event.data.lastName}`)
        setCurrentRowData([event.data])
    }, [])

    const cellKeyDownListener = useCallback((event) => {
        if (event.event.code === 'Enter') {
            setRowSelected(true)
            setEmployeeName(`${event.data.firstName} ${event.data.lastName}`)
            setCurrentRowData([event.data])
        }
    }, [])

    const deselectCurrentRow = useCallback((e) => {
        gridRef.current.api.deselectAll()
        setRowSelected(false)
    }, [])

    const paginationNumberFormatter = useCallback((params) => {
        return params.value.toLocaleString()
    }, [])

    const onGridReady = useCallback(
        (params) => {
            setRowData(createRowsDatas(employees.employees))
        },
        [employees.employees]
    )

    const onPageSizeChanged = useCallback(() => {
        let value = document.getElementById('page-size').value
        gridRef.current.api.paginationSetPageSize(Number(value))
    }, [])

    const onFirstDataRendered = useCallback((params) => {
        gridRef.current.api.paginationGoToPage(4)
        gridRef.current.api.sizeColumnsToFit()
    }, [])

    //*functions
    const handleRemovedAnEmployee = () => {
        dispatch(removedAnEmployee(currentRowData))
    }

    return (
        <div style={containerStyle}>
            <div style={{ height: '100%', boxSizing: 'border-box' }}>
                <div className="ag-theme-alpine" style={gridStyle}>
                    <AgGridReact
                        ref={gridRef} // Ref for accessing Grid's API
                        rowData={rowData} // Row Data for Rows
                        columnDefs={columnDefs} // Column Defs for Columns
                        defaultColDef={defaultColDef} // Default Column Properties
                        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                        rowSelection={'multiple'} // Options - allows click selection of rows
                        onCellClicked={cellClickedListener} // Optional - registering for Grid Event
                        onCellKeyDown={cellKeyDownListener}
                        columnTypes={columnTypes}
                        columnHoverHighlight={true}
                        pagination={true}
                        paginationPageSize={10}
                        paginationNumberFormatter={paginationNumberFormatter}
                        onGridReady={onGridReady}
                        onFirstDataRendered={onFirstDataRendered}
                    />
                </div>
            </div>

            <div>
                <StyledFeatureContent width={width} tabIndex={0}>
                    <StyledDeleteQuestionContent width={width}>
                        <StyledQuestion>
                            {rowSelected === true
                                ? `Would you like to delete ${employeeName} ?`
                                : ''}
                        </StyledQuestion>
                        <StyledButtonsContent>
                            <Button
                                type={'basic'}
                                text={`yes`}
                                icon={null}
                                action={handleRemovedAnEmployee}
                                isItSelected={rowSelected}
                            />
                            <Button
                                type={'basic'}
                                text={`no`}
                                icon={null}
                                action={deselectCurrentRow}
                                isItSelected={rowSelected}
                            />
                        </StyledButtonsContent>
                    </StyledDeleteQuestionContent>

                    <div className="example-wrapper">
                        <StyledPageSizeContent>
                            <StyledPageSizeText>Page Size</StyledPageSizeText>
                            <StyledBackgroundPageSizeSelect>
                                <StyledPageSizeSelect
                                    onChange={onPageSizeChanged}
                                    id="page-size"
                                    defaultValue={'10'}
                                >
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="25">20</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </StyledPageSizeSelect>
                            </StyledBackgroundPageSizeSelect>
                        </StyledPageSizeContent>
                    </div>
                </StyledFeatureContent>
            </div>
            {rowSelected === true && <Card rowData={currentRowData} />}
        </div>
    )
}
