import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="min-w-screen min-h-screen w-full h-full bg-gray-900 text-gray-100">
      <Head />
      <body className="h-full w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
