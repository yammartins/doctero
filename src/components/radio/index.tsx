import { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { InputProps } from './types';
import Text from '../typography';

const Radio: React.FC<InputProps> = ({
  name,
  options,
  ...rest
}) => {
  // Alterei a tipagem do inputRefs

  const inputRefs = useRef<HTMLInputElement[]>([]);
  const {
    fieldName, registerField, defaultValue = '', error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => refs?.find((input) => input?.checked)?.value || '',
      setValue: (refs: HTMLInputElement[], id: string) => {
        const inputRef = refs?.find((ref) => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs?.find((ref) => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [fieldName, registerField]);

  return (
    <div className="">
      {options.map(({ id, value, label }, index) => (
        <div
          key={id}
          className=""
        >
          <div className="">
            <input
              {...rest}
              ref={(ref) => {
                inputRefs.current[index] = ref as HTMLInputElement;
              }}
              type="radio"
              name={name}
              value={value}
              id={id}
              defaultChecked={defaultValue.includes(id)}
            />

            <span className="" />
          </div>

          <label
            htmlFor={label}
          >
            {label}
          </label>
        </div>
      ))}

      {error
       && (
       <Text>
         {error}
       </Text>
       )}
    </div>
  );
};
export default Radio;
