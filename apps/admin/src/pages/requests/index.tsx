import React, { useState } from 'react';

import { useFetch } from '~/hooks';
import { Head } from '~/layouts';

import View from './styles';

const Requests: React.FC = () => {
  const [display, onDisplay] = useState<'list' | 'grid'>('list');

  const { data } = useFetch('/request');

  console.log(data);

  return (
    <View>
      <Head
        title="Solicitações"
        display={display}
        onDisplay={onDisplay}
      />
    </View>
  );
};

export default Requests;
