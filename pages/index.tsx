import Head from 'next/head'
import Layout from '../components/Layout'
import ProductList from '../components/Product'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>

      <ProductList />
      
    </Layout>
  )
}
