import { ButtonHandles } from "./types"
import classNames from "classnames"
import { Icon } from '../index'

const Button: React.FC<ButtonHandles> = ({
  label,
  size = 'base',
  appearance = 'primary',
  full = false,
  icon,
  submit,
  disabled,
  loading = false,
  className,
  ...rest
}) => {
  const styled = classNames(
    'button',
    size && `is-${size}`,
    appearance && `is-${appearance}`,
    full && 'w-full',
    disabled && 'is-disabled',
    className,
  )

  return (

    <button
     {...rest}
     type={submit ? 'submit' : 'button'}
     className={styled}
     disabled={disabled}
    >
      {icon && ! loading && (
        <Icon
        name={icon as string}
        color={appearance}
       />
      )}

      {! loading ? (
        label
      ) : (
        <div className="loading" />
      )}

    </button>
  )
};

export default Button;
