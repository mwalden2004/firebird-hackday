import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="px-12 py-12">
        <Component {...pageProps} />
      </div>
      <NavBar />
    </div>
  );
}
