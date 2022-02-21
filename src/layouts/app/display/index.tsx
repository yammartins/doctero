import View from './styles';
import { ViewHandles } from './types';

const Display: React.FC<ViewHandles> = ({
  display,
  children,
  ...rest
}) => (
  <View
    {...rest}
    display={display}
  >
    {children}
  </View>
);

export default Display;
