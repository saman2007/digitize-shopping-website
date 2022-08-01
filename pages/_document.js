import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="w-full h-full font-yekan-md">
        <Head />
        <body className="w-full h-full scroll-smooth bg-[#E5E5E5]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
