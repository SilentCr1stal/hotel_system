import Head from "next/head";
import Script from "next/script";

export function MainLayout({ children, title = "GuestHouse.ru" }) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="отели, гостиницы, бронирований отелей, бронирование гостиниц, проживание, скидки на отели, сравнение цен на отели"
        />
        <meta
          name="description"
          content="Все гостиницы России с ценами, бронирование отелей от недорогих до гостиниц премиум класса"
        />
        <meta charSet="utf-8" />
        <title>
          {title} - Все гостиницы России с ценами, бронирование отелей от
          недорогих до гостиниц премиум класса
        </title>
      </Head>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js"
        integrity="sha512-6PM0qYu5KExuNcKt5bURAoT6KCThUmHRewN3zUFNaoI6Di7XJPTMoT6K0nsagZKk2OB4L7E3q1uQKHNHd4stIQ=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <main>{children}</main>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />
      
    </>
  );
}
