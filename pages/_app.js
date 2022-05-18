import "../styles/global.scss";
import "../node_modules/normalize.css/normalize.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {

  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild)
    return null

  return (
    <>
      <Head>
        <meta
          name="description"
          content="GuestHotel - поиск и сравнение лучших цен на отели и гостиницы со скидкой до 60%. Для бронирования доступно 358000 отелей, 110000 хостелов, 602000 гостевых домов и 3972000 апартаментов по лучшим ценам"
        />
        <meta
          name="keywords"
          content="отели, гостиницы, бронирований отелей, бронирование гостиниц, проживание, скидки на отели, сравнение цен на отели"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
