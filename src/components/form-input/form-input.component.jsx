import {Group, Input,FormInputLabel} from './form-input.styles.jsx';

const FormInput = ({ label, inputOptions }) => {
    return (
        <Group>
            <Input
                {...inputOptions}
            />
            {label &&
                <FormInputLabel shrink={inputOptions.value.length > 0}>
                    {label}
                </FormInputLabel>
            }
        </Group>
    )
}

export default FormInput;