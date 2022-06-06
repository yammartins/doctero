import {
  useRef,
  useState,
  useEffect,
} from 'react';

import { useField } from '@unform/core'

import Base from './base';

import { FormProps, InputHandles } from './types';

const InputForm: React.FC<FormProps> = ({
  name,
  ...rest
}) => {

  const [filled, onFilled] = useState('');

  const ref = useRef<InputHandles>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <Base
    {...rest}
      ref={ref as any}
      fieldName={fieldName}
      defaultValue={defaultValue}
      name={name}
    />
  );
};

export default InputForm;
