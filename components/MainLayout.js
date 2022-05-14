import Head from "next/head";
import Link from "next/link";

export function MainLayout({
  children,
  title = "GuestHouse.ru",
}) {
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
          {title} - Все гостиницы России с ценами, бронирование отелей от недорогих до гостиниц премиум класса
        </title>
      </Head>
      <nav>
        <Link href={"/"}>
          <a>Main</a>
        </Link>
        <Link href={"/hotels"}>
          <a>Hotels</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/error"}>
          <a>Page 404</a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          position: fixed;
          height: 50px;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          background-color: #56656699;
        }
        nav a {
          color: #ffffff;
          padding: 15px 10px 0;
        }
      `}</style>
      <main>{children}</main>
      <style global jsx>
        {`
          main {
            margin: 80px 0 0 0;
          }
        `}
      </style>
    </>
  );
}
