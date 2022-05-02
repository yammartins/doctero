import classNames from 'classnames';

import View from './styles';
import { ButtonHandles } from './types';

const Button: React.FC<ButtonHandles> = ({
  size = 'md',
  full = false,
  label,
  loading,
  appearance = 'primary',
  icon,
  submit = true,
  disabled,
  className,
  ...rest
}) => {
  const styled = classNames(
    'button',
    full && 'is-full',
    size && `is-${size}`,
    appearance && `is-${appearance}`,
    disabled && 'is-disabled',
    className,
  );

  return (
    <View>

      <button
        {...rest}
        type={submit ? 'submit' : 'button'}
        disabled={disabled}
        className={styled}
      >
        {icon}

        {loading ? (
          <div className="loading" />
        ) : (
          label
        )}
      </button>

    </View>
  );
};

export default Button;
