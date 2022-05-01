import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head />
      <body
        className={`bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
