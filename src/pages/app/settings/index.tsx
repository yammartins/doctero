import { AppHead, AppLayout } from '~/layouts';

import View from './styles';

const Settings: React.FC = () => (
  <AppLayout>
    <View>
      <AppHead title="Configurações" />
    </View>
  </AppLayout>
);

export default Settings;
