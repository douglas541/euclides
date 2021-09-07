import Head from 'next/head';
import Layout from '../components/Layout';
import GlobalStyle from '../../styles/globals';
import Hero from '../components/Hero';
import CardsContainer from '../components/CardsContainer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Euclides</title>
        <meta name="description" content="Calculadora Euclidiana" />
        <link rel="icon" href="/logo_small.svg" />
      </Head>

      <GlobalStyle />

      <Layout>
        <Hero/>
        <CardsContainer/>
      </Layout>

    </div>
  )
}
