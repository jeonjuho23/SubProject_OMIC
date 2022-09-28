import Head from "next/head";
import Hero from "../components/home/hero";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>OMIC</title>
        <meta name="description" content="OMIC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-colum text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
