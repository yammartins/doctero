import React, { useState } from 'react';

import { Head } from '../../layouts';
import View from './styles';

const App: React.FC = () => {
  const [display, onDisplay] = useState<'list' | 'grid'>('list');

  return (
    <View>
      <Head
        title="Dashboard"
        display={display}
        onDisplay={onDisplay}
      />
    </View>
  );
};

export default App;
