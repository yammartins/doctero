import { LottieProps } from 'react-lottie';

export interface Handles extends Omit<LottieProps, 'options'> {
  loop?: boolean,
  animation: 'email' | 'success' | 'email-send',
}
