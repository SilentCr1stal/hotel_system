import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About({}) {
  return (
    <MainLayout title="О сайте GuestHouse.ru">
      <div>
        <h1>About page</h1>
        <button onClick={() => Router.push("/hotels")}>
          Go to hotels page
        </button>
        <button onClick={() => Router.push("/")}>Back to home</button>
      </div>
    </MainLayout>
  );
}
