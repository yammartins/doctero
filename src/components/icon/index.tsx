import classNames from 'classnames';
import { IconHandles } from './types';

const Icon: React.FC<IconHandles> = ({
  name,
  color,
  className,
}) => {
  const styled = classNames(
    'icon',
    `ph-${name}`,
    color,
    className,
  );

  return (
    <i
      className={styled}
    />
  );
};

export default Icon;
