import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const Document: React.FC = () => (
  <Html>
    <Head>
      <meta charSet="utf-8" />

      <link rel="stylesheet" href="https://unpkg.com/tailwindcss/src/css/preflight.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </Head>
    <body>
      <Main />

      <NextScript />
    </body>
  </Html>
);

export default Document;
