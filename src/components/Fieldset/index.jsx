// import { useForm } from 'react-hook-form'
//*components
import Inputs from '../Inputs'
//*utils
import { states } from '../../utils/DatasForInputSelect/index'
//*Styled
import { StyledAddress, StyledLegend } from './styled'

export default function Fieldset({ type, legend, register, errors, control }) {
    return (
        <StyledAddress className="address">
            <StyledLegend>{`${legend}`}</StyledLegend>

            <Inputs
                name={type[0].name}
                type={type[0].type}
                label={type[0].label}
                register={register}
                errors={errors}
                control={control}
            />
            <Inputs
                name={type[1].name}
                type={type[1].type}
                label={type[1].label}
                register={register}
                errors={errors}
                control={control}
            />
            <Inputs
                name={type[2].name}
                type={type[2].type}
                label={type[2].label}
                register={register}
                errors={errors}
                control={control}
                options={states}
            />
            <Inputs
                name={type[3].name}
                type={type[3].type}
                label={type[3].label}
                register={register}
                errors={errors}
                control={control}
            />
        </StyledAddress>
    )
}
