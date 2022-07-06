import { useRef } from 'react'
// import { useSelector } from 'react-redux'
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
//*actions
import { actionsToggleModal } from './toggleModalReducer'
import { actionsEmployees } from './employeesReducer'
//*utils
import { department } from '../../utils/DatasForInputSelect/index'

export default function CreateEmployeesForm({ currentWidth }) {
    //*Store with Redux and react-redux
    const dispatch = useDispatch()
    // const employees = useSelector(selectEmployees)

    //* react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        let i = parseInt(Math.random().toString().split('.')[1]) + 1
        let newData = { ...data, index: i }
        console.log(newData)
        dispatch(actionsEmployees.addAnEmployee(newData))
        dispatch(actionsToggleModal.toggleModal())
    }

    const dateOfBirthRef = useRef(null)
    const startDateRef = useRef(null)

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
