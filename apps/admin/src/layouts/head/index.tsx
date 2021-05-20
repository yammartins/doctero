import React from 'react';

import { Text, Input } from '@uxoctopus/core';

import View from './styles';
import { HeadHandles } from './types';

const Head: React.FC<HeadHandles> = ({ title }) => (
  <View className="head flex items-center justify-between">
    <Text
      type="h2"
      label={title}
      weight="800"
    />
  </View>
);

export default Head;
