import ReactInputMask from "react-input-mask";
import { Icon, Text } from '~/components';
import { FormProps } from "./types";
import { useState, forwardRef, memo } from "react";
import classNames from "classnames";

const Base: React.FC<FormProps> = ({
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
       <label htmlFor={fieldName}>
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
           id={fieldName}
           mask={mask}
           maskPlaceholder=""
           type={typed}
           ref={ref}
         />
       )}

     </div>
  );
};

export default Base;
