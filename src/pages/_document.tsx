import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload de videos para acelerar el primer hover */}
        <link rel="preload" as="video" href="/videos/Swatex-vid.mov" type="video/quicktime" />
        <link rel="preload" as="video" href="/videos/grupochavon-vid.mov" type="video/quicktime" />
        <link rel="preload" as="video" href="/videos/Lromana-vid.mov" type="video/quicktime" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
