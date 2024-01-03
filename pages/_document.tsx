import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link
          rel="shortcut icon"
          href="https://avatars.githubusercontent.com/u/62999761?s=30&v=4"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Portfólio de desenvolvedor back-end Tiago Ryan"
        />
        <meta
          name="keywords"
          content="Desenvolvedor Back-end, Programador, Portfólio, Tiago Ryan"
        />
        <meta name="author" content="Tiago Ryan" />

        <meta
          property="og:title"
          content="Portfólio de Desenvolvedor Back-end Tiago Ryan"
        />
        <meta
          property="og:description"
          content="Confira o portfólio de Tiago Ryan, especializado em desenvolvimento back-end."
        />
        <meta property="og:url" content="https://tiagoryandev.vercel.app" />

        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
