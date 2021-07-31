import React from 'react';

import View from './styles';
import { ViewHandles } from './types';

const Display: React.FC<ViewHandles> = ({
  display,
  children,
  className = '',
}) => (
  <View
    display={display}
    className={`flex flex-col mt-48 gap-24 ${className}`}
  >
    {children}
  </View>
);

export default Display;
