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

      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

      <link rel="stylesheet" href="https://unpkg.com/tailwindcss/src/css/preflight.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </Head>
    <body>
      <Main />

      <NextScript />
    </body>
  </Html>
);

export default Document;
