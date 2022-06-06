import ReactInputMask from "react-input-mask";
import { Icon, Text } from '~/components';
import { InputElementProps, InputProps } from "./types";
import { useState, forwardRef, memo, ForwardRefRenderFunction } from "react";
import classNames from "classnames";

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

  return (
     <div className="input-box">
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
        />
       </label>
       {how === 'default' && (
         <ReactInputMask
           {...rest}
           ref={ref}
           id={fieldName}
           mask={mask}
           maskPlaceholder=""
           type={typed}
           className={`input-box-mask ${className}`}
         />
       )}

     </div>
  );
};

export default memo(forwardRef(Base));
