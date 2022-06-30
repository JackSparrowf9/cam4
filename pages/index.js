import Head from "next/head";
import Image from "next/image";
import FooterArticle from "../components/footerArticle";
import Header from "../components/header";
import Main from "../components/main";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <FooterArticle />
    </>
  );
}
