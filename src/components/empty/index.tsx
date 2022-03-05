import { Text } from '@uxoctopus/core';

import View from './styles';
import { EmptyHandles } from './types';

const Empty: React.FC<EmptyHandles> = ({ label, ...rest }) => (
  <View {...rest}>
    <Text label={label} />
  </View>
);

export default Empty;
