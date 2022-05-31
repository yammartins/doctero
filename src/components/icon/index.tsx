import { IconHandles } from "./types"
import classNames from "classnames";

const Icon: React.FC<IconHandles> = ({
  name,
  color,
}) => {
  const styled = classNames(
    'icon',
    `ph-${name}`,
    color,
  );

  return (
    <i
    className={styled}
    />
 );
}

export default Icon;
