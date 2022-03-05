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
    <View className="head">
      <Text
        type="h2"
        size="4xl"
        label={title}
        weight="800"
      />

      {display && (
        <Icon
          size="lg"
          name="view-grid"
          onClick={change}
          className={`head-display is-${display}`}
        />
      )}
    </View>
  );
};

export default Head;
