import View from './styles';
import { TextHandles } from './types';

const Text: React.FC<TextHandles> = ({
  label,
  children,
  type = 'p',
  ...rest
}) => (
  <View {...rest} as={type}>
    {label || children}
  </View>

);

export default Text;
