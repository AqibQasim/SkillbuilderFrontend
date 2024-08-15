import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function initGoogleSignIn() {
              gapi.load('auth2', function() {
                gapi.auth2.init({
                  client_id: '39529635224-ct7s70vmmtjpvh6gsdmhpvec1i7ol36a.apps.googleusercontent.com',
                });
              });
            }
          `,
          }}
        />

        <title>Skillbuilder</title>
        <meta name="description" content="Skillbuilder" />
        <link rel="icon" href="/skillbuilder-logo-icon.svg" sizes="any" />
      </Head>
      <body onLoad="initGoogleSignIn()">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
