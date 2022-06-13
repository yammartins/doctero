import ReactInputMask from 'react-input-mask';
import {
  useState, forwardRef, memo, ForwardRefRenderFunction,
} from 'react';
import classNames from 'classnames';
import { Icon, Text } from '~/components';
import { InputElementProps, InputProps } from './types';

const Base: ForwardRefRenderFunction<InputElementProps, InputProps> = ({
  icon,
  full,
  placeholder,
  fieldName,
  label,
  how = 'default',
  type,
  mask = '',
  rows,
  cols,
  className,
  ...rest
}, ref) => {
  const [typed, onTyped] = useState(type);
  const [focused, onFocused] = useState(false);
  const [filled, onFilled] = useState('');

  return (
    <div className={`input-box ${focused || filled.length > 0 ? 'on-focus' : ''}`}>
      <label
        className="input-box-label"
        htmlFor={fieldName}
      >
        {icon && (
        <Icon
          name={icon}
        />
        )}

        <Text
          label={label}
          className={!icon ? 'icon-off' : ''}
        />
      </label>
      {how === 'default' && (
      <ReactInputMask
        {...rest}
        ref={ref}
        id={fieldName}
        mask={mask}
        onFocus={() => onFocused(true)}
        onBlur={() => onFocused(false)}
        onChange={({ target }) => onFilled(target.value)}
        maskPlaceholder=""
        type={typed}
        className={`input-box-mask ${className}`}
      />
      )}

    </div>
  );
};

export default memo(forwardRef(Base));
