import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const Document: React.FC = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

      <script src="https://unpkg.com/phosphor-icons"></script>

      <link rel="icon" type="image/png" href="/icon.jpeg" />
    </Head>

    <body>

      <Main />

      <NextScript />

    </body>
  </Html>
);

export default Document;
