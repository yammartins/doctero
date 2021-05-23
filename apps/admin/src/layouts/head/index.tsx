import React from 'react';

import { Text, Icon } from '@uxoctopus/core';

import View from './styles';
import { HeadHandles } from './types';

const Head: React.FC<HeadHandles> = ({
  title,
  display,
  onDisplay = () => null,
}) => {
  const change = () => {
    if (display === 'grid') onDisplay('list');

    if (display === 'list') onDisplay('grid');
  };

  return (
    <View className="head flex items-center justify-between">
      <Text
        type="h2"
        label={title}
        weight="800"
      />

      <Icon
        name="view-grid"
        onClick={change}
        className={`p-12 head-display rounded-full cursor-pointer is-${display}`}
      />
    </View>
  );
};

export default Head;
