import Document, { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../lib/gtm";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PMLSNWD"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
