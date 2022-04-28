import { useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import Base from './base';
import { FormHandles, RefInputHandles } from './types';

const Input: React.FC<FormHandles> = ({
  name,
  ...props
}) => {
  const inputRef = useRef<RefInputHandles>(null);

  const {
    fieldName,
    defaultValue,
    registerField,
    clearError,
    error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value; //eslint-disable-line
      },
      clearValue: (ref) => {
        ref.current.value = ''; //eslint-disable-line
      },
    });
  }, [fieldName, registerField]);

  return (
    <Base
      {...props}
      ref={inputRef}
      error={error}
      onFocus={clearError}
      fieldName={fieldName}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
