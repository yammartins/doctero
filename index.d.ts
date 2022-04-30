import type { CSSProp } from 'styled-components';
import { Interpolation, Styles } from 'styled-components/dist/types';

import { colors } from './src/styles';

declare module '*.svg';

type ThemeType = typeof colors;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}

  function css<Props>(
    styles: Styles<Props>,
    ...interpolations: Interpolation<Props>[]
  ): Interpolation<CSSProp>[] & string;
}

declare module 'react' {
  interface DOMAttributes {
    css?: CSSProp;
  }
}
