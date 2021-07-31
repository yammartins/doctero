import React from 'react';

import View from './styles';
import { CardHandles } from './types';

const Card: React.FC<CardHandles> = ({
  children,
  className = '',
}) => (
  <View className={`card rounded-8 p-32 ${className}`}>
    {children}
  </View>
);

export default Card;
