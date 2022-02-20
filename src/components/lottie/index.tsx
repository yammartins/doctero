import Lottie from 'react-lottie';

import { Email, Success, EmailSend } from '~/assets';

import { Handles } from './types';

const Animation: React.FC<Handles> = ({
  loop = false,
  animation,
  ...rest
}) => {
  const animations = {
    email: Email,
    success: Success,
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
