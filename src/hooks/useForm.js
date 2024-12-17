import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formVlidation, setFormVlidation] = useState({

    })

    useEffect(() => {
      createValidators();
    }, [formState])

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm])
    
    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formVlidation)){
            if(formVlidation[formValue] !== null) return false;
        }
        return true;
    }, [formVlidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = ()=>{
        const formCheckedValues={};

        for (const formField of Object.keys(formValidations)){
            const [fn, errorMessage='Este campo es requerido'] = formValidations[formField];
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setFormVlidation(formCheckedValues);
        
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formVlidation,
        isFormValid
    }
}