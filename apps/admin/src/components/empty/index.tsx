import React from 'react';

import { Text } from '@uxoctopus/core';

import View from './styles';
import { EmptyHandles } from './types';

const Empty: React.FC<EmptyHandles> = ({ label, className }) => (
  <View className={className}>
    <Text label={label} />
  </View>
);

export default Empty;
