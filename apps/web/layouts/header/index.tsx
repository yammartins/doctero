import { Button } from '@core/components';
import { Col, Grid } from '@uxoctopus/core';
import Image from 'next/image';

import View from './styles';

const Header: React.FC = () => (
  <View className="header h-screen">
    <Grid className="h-full">
      <Col sm={7}>
        <div className="header-wrapper">
          <h1 className="font-bold">
            Build fast, secured and beutuful web-sites.
          </h1>

          <p className="mt-20">
            Create, build, collaborate and ship products faster. Good bye code! 👋
          </p>

          <Button
            label="Cadastre-se agora"
            className="mt-64"
          />
        </div>
      </Col>

      <Col sm={5}>
        <div className="header-image">
          <Image
            src="/assets/header.png"
            width={580}
            height={392}
            layout="responsive"
            loading="lazy"
          />
        </div>
      </Col>
    </Grid>
  </View>
);

export default Header;
