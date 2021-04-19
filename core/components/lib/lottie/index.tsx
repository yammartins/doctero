import Lottie from 'react-lottie';

import EmailSend from '@core/assets/animations/email-send.json';
import Email from '@core/assets/animations/email.json';

import { Handles } from './types';

const Animation: React.FC<Handles> = ({
  loop = false,
  animation,
  ...rest
}) => {
  const animations = {
    email: Email,
    'email-send': EmailSend,
  };

  const configs = {
    loop,
    autoplay: true,
    animationData: animations[animation],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      {...rest}
      style={{ pointerEvents: 'none' }}
      options={configs}
    />
  );
};

export default Animation;
