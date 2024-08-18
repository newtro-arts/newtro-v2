import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Footer from "../components/Footer";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Newtro Arts, based in Argentina, aims to promote, educate, and introduce Latin American artists and cultural agents to blockchain technology. We offer workshops and tutorials for beginners interested in NFTs and digital art, fostering a community around crypto art."
          />
          <meta
            name="keywords"
            content="W3b, argentina, newtro, nft, taller nft, nft principiantes, tutorial nft, arte digital, blockchain, crypto art, arte crypto, community"
          />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="stylesheet" href="https://use.typekit.net/qwl5jug.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="min-h-screen flex flex-col">
          <div className="flex-grow bg-primary-dark">
            <Main />
          </div>
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
