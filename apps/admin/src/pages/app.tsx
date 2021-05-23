import React, { useState } from 'react';

import { Head } from '../layouts';

const App: React.FC = () => {
  const [display, onDisplay] = useState<'list' | 'grid'>('list');

  console.log(display);

  return (
    <div>
      <Head
        title="Dashboard"
        display={display}
        onDisplay={onDisplay}
      />
    </div>
  );
};

export default App;
