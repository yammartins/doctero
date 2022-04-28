import { useState, RefObject } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import View from './styles';
import { InputHandles, RefInputHandles } from './types';

const Base: React.ForwardRefRenderFunction<RefInputHandles, InputHandles> = ({
  label,
  how,
  icon,
  mask = '',
  rows = 4,
  cols = 30,
  fieldName,
  ...rest
}, ref: RefObject<RefInputHandles & InputProps>) => {
  const [focus, onFocus] = useState(false);

  return (
    <View>
      <div className="wrapper">

        <div className="input-box">

          {label && (
            <label htmlFor={fieldName}>
              {label}
            </label>
          )}

          {how === 'input' && (
            <ReactInputMask
              {...rest}
              id={fieldName}
              type="text"
              ref={ref}
              mask={mask}
              maskPlaceholder=""
            />
          )}

          {how === 'textarea' && (
            <textarea
              name=""
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

export default Base;
