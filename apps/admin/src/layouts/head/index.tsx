import React from 'react';

import { Text, Input } from '@uxoctopus/core';

import View from './styles';
import { HeadHandles } from './types';

const Head: React.FC<HeadHandles> = ({
  title,
  search,
  onSearch,
}) => (
  <View className="head flex items-center justify-between">
    <Text
      type="h2"
      label={title}
      weight="800"
    />

    <Input
      name="search"
      label="Pesquisar"
      value={search}
      onValue={onSearch}
      iconRight="search"
    />
  </View>
);

export default Head;
