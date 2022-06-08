// import { useForm } from 'react-hook-form'
//*components
import Input from '../Input'
//*styled
import styled from 'styled-components'
//*utils
import { colors, radius } from '../../utils/css'
import { states } from '../../utils/selectDatas/states/index'

const StyledAddress = styled.fieldset`
    margin-top: 10px;
    padding: 20px;
    border: none;
    box-shadow: 0px 0px 3px ${colors.colorPrimary};
    border-radius: ${radius.main};
`

const StyledLegend = styled.legend`
    position: relative;
    top: 25px;
    font-size: 0.8rem;
    color: ${colors.colorPrimary};
    margin: 20px;
    right: 20px;
    font-weight: 600;
`
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
