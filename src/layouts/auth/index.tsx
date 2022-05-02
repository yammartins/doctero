import { Logo } from '~/assets';
import { Text } from '~/components';
import { View } from '~/styles';

import { AuthHandles } from './types';

const Auth: React.FC<AuthHandles> = ({
  children,
  title,
  description,
}) => (
  <View>

    <div className="container">
      <div className="main">

        <div className="main-header">
          <Logo className="logo" />

          <Text
            label={title}
            type="h1"
            size="lg"
            weight="700"
            family="poppins"
            align="center"
          />

          <Text
            label={description}
            className="auth-description"
            align="center"
          />
        </div>

        <div className="main-body">

          {children}

        </div>
      </div>
    </div>

  </View>
);

export default Auth;
