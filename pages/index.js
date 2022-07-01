import Head from "next/head";
// import Image from "next/image";
import FooterArticle from "../components/footerArticle";
import Header from "../components/header";
import Main from "../components/main";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <title>Live Sex Cam4 - Free Live Adult Webcam Shows</title>
        <meta
          name='description'
          content='Free Live Sex Chat and XXX Porn shows for FREE without Registration! Chat with 1000+ Girls Online on Live Sex Cams!'
        />
        <meta
          name='keywords'
          content='live sex, chaturbate, stripchat, live sex show, sex show, adult chat'
        />
        <link rel='canonical' href='https://livesexcam4.com' />
        <meta name='author' content='Live Sex Cam4' />

        {/* OG type  */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Live Sex Cam4 - Free Live Adult Webcam Shows'
        />
        <meta
          property='og:description'
          content='Free Live Sex Chat and XXX Porn shows for FREE without Registration! Chat with 1000+ Girls Online on Live Sex Cams!'
        />
        <meta property='og:url' content='https://livesexcam4.com' />
        <meta property='og:site_name' content='Live Sex Cam4' />
        <meta property='og:image' content='https://livesexcam4.com/bg.png' />
        <link rel='shortcut icon' href='favicon.ico' />
        <link rel='preload' href='/bg.png' as='image'></link>
        <link rel='preload' href='images/icra.png' as='image'></link>
        <link rel='preload' href='images/rta.png' as='image'></link>
        <link rel='preload' href='images/safelabeling.gif' as='gif'></link>
        {/* <link
          rel='icon'
          type='image/png'
          href='images/favicon/android-icon-192x192.png'
          sizes='192x192'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='images/favicon/apple-touch-icon.png'
        /> */}
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <Main />
      <FooterArticle />
    </>
  );
}
