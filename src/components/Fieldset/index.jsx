// import { useForm } from 'react-hook-form'
//*components
import Input from '../Input'
//*utils
import { states } from '../../utils/DatasForInputSelect/index'
//*Styled
import { StyledAddress, StyledLegend } from './styled'

export default function Fieldset({ legend, register, errors, control }) {
    return (
        <StyledAddress className="address">
            <StyledLegend>{`${legend}`}</StyledLegend>
            <Input
                name="street"
                type="text"
                label="Street"
                register={register}
                errors={errors}
                control={control}
            />
            <Input
                name="city"
                type="text"
                label="City"
                register={register}
                errors={errors}
                control={control}
            />
            <Input
                name="states"
                type="select"
                label="State"
                register={register}
                errors={errors}
                control={control}
                options={states}
            />
            <Input
                name="zipCode"
                type="text"
                label="Zip Code"
                register={register}
                errors={errors}
                control={control}
            />
        </StyledAddress>
    )
}
