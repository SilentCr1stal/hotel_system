import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <h1>Hello, NEXT.JS</h1>
        <p>
          <Link href={"/about"}>
            <a>About</a>
          </Link>
        </p>
        <p>
          <Link href="/hotels">
            <a>Hotels</a>
          </Link>
        </p>
      </div>
    </MainLayout>
  );
}
