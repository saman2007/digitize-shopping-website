import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="w-full h-full font-yekan-md text-[16px]">
        <Head />
        <body className="w-full h-full scroll-smooth bg-gray-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
