import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
//*components
import Inputs from '../Inputs'
import Fieldset from '../Fieldset/index'
import Button from '../Button'
//*styled
import {
    StyledForm,
    StyledContentForm,
    StyledInputsContent,
    StyledInputsGlobalContent,
} from './styled'
//*service
import { schema } from './shemaYUP'
//*actions-Redux
import { actionsToggleModal } from './toggleModalReducer'
import { actionsEmployees } from './employeesReducer'
//*utils
import { department } from '../../utils/DatasForInputSelect/index'
import PropTypes from 'prop-types'
/**
 * it returns a form component in particular one to create a new employee.
 * @returns { HTMLElements } It return a React Component.
 */
export default function CreateEmployeesForm({ currentWidth }) {
    const dispatch = useDispatch() //*Redux
    const dateOfBirthRef = useRef(null) //*useRef
    const startDateRef = useRef(null) //*useRef
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
    }) //*React-Hook-Form
    const onSubmit = (data) => {
        let i = parseInt(Math.random().toString().split('.')[1]) + 1
        let newData = { ...data, index: i }
        dispatch(actionsEmployees.addAnEmployee(newData))
        dispatch(actionsToggleModal.toggleModal())
    }
    return (
        <StyledContentForm width={currentWidth}>
            <StyledForm
                action="#"
                id="create-employee"
                onSubmit={handleSubmit(onSubmit)}
            >
                <StyledInputsGlobalContent width={currentWidth}>
                    <StyledInputsContent width={currentWidth}>
                        <Inputs
                            width={currentWidth}
                            name="firstName"
                            type="text"
                            label="First Name"
                            register={register}
                            errors={errors}
                            control={control}
                        />
                        <Inputs
                            width={currentWidth}
                            name="lastName"
                            type="text"
                            label="Last Name"
                            register={register}
                            errors={errors}
                            control={control}
                        />
                        <Inputs
                            width={currentWidth}
                            name="dateOfBirth"
                            type="text"
                            label="Date of Birth"
                            register={register}
                            errors={errors}
                            control={control}
                            myRef={dateOfBirthRef}
                        />
                        <Inputs
                            width={currentWidth}
                            name="startDate"
                            type="text"
                            label="Start Date"
                            register={register}
                            errors={errors}
                            control={control}
                            myRef={startDateRef}
                        />
                    </StyledInputsContent>
                    <StyledInputsContent width={currentWidth}>
                        <Fieldset
                            type={[
                                {
                                    name: 'street',
                                    type: 'text',
                                    label: 'Street',
                                },
                                { name: 'city', type: 'text', label: 'City' },
                                {
                                    name: 'states',
                                    type: 'select',
                                    label: 'States',
                                },
                                {
                                    name: 'zipCode',
                                    type: 'text',
                                    label: 'Zip Code',
                                },
                            ]}
                            legend="Address"
                            register={register}
                            errors={errors}
                            control={control}
                        />
                        <Inputs
                            name="department"
                            type="select"
                            label="Department"
                            register={register}
                            errors={errors}
                            control={control}
                            options={department}
                        />
                    </StyledInputsContent>
                </StyledInputsGlobalContent>
                <Button type="submit" text="Save" width={currentWidth} />
            </StyledForm>
        </StyledContentForm>
    )
}

CreateEmployeesForm.propTypes = {
    currentWidth: PropTypes.number.isRequired,
}

CreateEmployeesForm.defaultProps = {
    currentWidth: window.innerWidth,
}
