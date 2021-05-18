import React, { useState } from 'react';

import { Head } from '../layouts';

const App: React.FC = () => {
  const [search, onSearch] = useState('');

  return (
    <div>
      <Head
        title="Dashboard"
        search={search}
        onSearch={onSearch}
      />
    </div>
  );
};

export default App;
