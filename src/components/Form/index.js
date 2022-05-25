// import { reduxForm } from 'redux-form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
//*components
import Input from '../Input'
import Fieldset from '../Fieldset/index'
import Button from '../Button'
//*styled
import { StyledForm, StyledContentForm } from './styled'
//*service
import { schema } from './service'

export default function CreateEmployeesForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)
    return (
        <StyledContentForm>
            <StyledForm
                action="#"
                id="create-employee"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    name="firstName"
                    type="text"
                    label="First Name"
                    register={register}
                    errors={errors}
                    control={control}
                />
                <Input
                    name="lastName"
                    type="text"
                    label="Last Name"
                    register={register}
                    errors={errors}
                    control={control}
                />
                <Input
                    name="dateOfBirth"
                    type="text"
                    label="Date of Birth"
                    register={register}
                    errors={errors}
                    control={control}
                />
                <Input
                    name="startDate"
                    type="text"
                    label="Start Date"
                    register={register}
                    errors={errors}
                    control={control}
                />
                <Fieldset
                    legend="Address"
                    register={register}
                    errors={errors}
                    control={control}
                />
                <Input
                    name="department"
                    type="select"
                    label="Department"
                    register={register}
                    errors={errors}
                    control={control}
                />
                <Button type="submit" text="Save" />
            </StyledForm>
        </StyledContentForm>
    )
}
