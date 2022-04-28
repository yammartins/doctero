import classNames from 'classnames';

import { ButtonHandles } from './types';

const Button: React.FC<ButtonHandles> = ({
  size,
  full,
  label,
  loading,
  appearance,
  icon,
  submit,
  disabled,
  ...rest
}) => {
  const styled = classNames(
    'button',
  );

  return (
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
  );
};

export default Button;
