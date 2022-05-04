import {
  useState, RefObject, ChangeEvent, FocusEvent, forwardRef,
} from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import {
  Email, Password, Phone, CPF, User, House, Reveal, Unreveal,
} from '~/assets';
import { Text } from '~/components';

import View from './styles';
import { InputHandles, RefInputHandles } from './types';

const Base: React.ForwardRefRenderFunction<RefInputHandles, InputHandles> = ({
  label,
  how = 'input',
  icon,
  error,
  mask = '',
  rows = 4,
  cols = 30,
  fieldName,
  type = 'text',
  ...rest
}, ref: RefObject<RefInputHandles & InputProps>) => {
  const [focus, onFocus] = useState(false);
  const [filled, onFilled] = useState('');
  const [typed, onTyped] = useState(type);

  const icons = {
    email: <Email />,
    password: <Password />,
    phone: <Phone />,
    user: <User />,
    cpf: <CPF />,
    address: <House />,
    undefined,
  };

  const revealPassword = () => {
    if (typed === 'password') onTyped('text');
    else onTyped('password');
  };

  return (
    <View>
      <div className={`wrapper ${error ? 'error-scenario' : ''}`}>

        <div className={`input-box ${focus || filled.length > 0 ? 'is-focus' : ''}`}>

          {label && (
            <label htmlFor={fieldName}>
              {icon && (
                icons[icon]
              )}

              <Text
                label={label}
                className={! icon ? 'empty' : ''}
              />
            </label>
          )}

          {how === 'input' && (
            <ReactInputMask
              {...rest}
              id={fieldName}
              type={typed}
              onChange={(e: ChangeEvent<RefInputHandles>) => {
                onFilled(e.target.value);

                if (rest.onChange) rest.onChange(e);
              }}
              onFocus={(e: FocusEvent<RefInputHandles, Element>) => {
                onFocus(true);

                if (rest.onFocus) rest.onFocus(e);
              }}
              onBlur={(e: FocusEvent<RefInputHandles, Element>) => {
                onFocus(false);

                if (rest.onBlur) rest.onBlur(e);
              }}
              ref={ref}
              mask={mask}
              maskPlaceholder=""
            />
          )}

          {how === 'textarea' && (
            <textarea
              id={fieldName}
              cols={cols}
              rows={rows}
            />
          )}

        </div>

      </div>
    </View>
  );
};

export default forwardRef(Base);
