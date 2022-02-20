import Lottie from 'react-lottie';

import { Handles } from './types';

const Animation: React.FC<Handles> = ({
  loop = false,
  animation,
  ...rest
}) => {
  const animations = {
    email: '/assets/animations/email.json',
    success: '/assets/animations/success.json',
    'email-send': '/assets/animations/email-send.json',
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
