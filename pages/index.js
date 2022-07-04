import Head from 'next/head'
import TopLang from '../components/toplang'
import MainContainer from '../containers/main'
import Navbar from '../components/navbar'
import Welcome from '../components/sections/welcome'
import Partner from '../components/sections/partner'
import Technic from '../components/sections/technic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const HomePage = () => {
  const memberUrl = process.env.NEXT_PUBLIC_MEMBER_HOST

  return (
    <>
      <Head>
        <title>Wynnclub888.com</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@200&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <TopLang />
      <Navbar />
      <MainContainer>
        <Welcome memberUrl={memberUrl} />
        <Partner />
        <Technic />
        <div className="pt-10"></div>
      </MainContainer>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default HomePage