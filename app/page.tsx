import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Static Page</title>
        <meta name="description" content="This is a simple static page built with Next.js" />
      </Head>

      <main style={{ padding: '100px', textAlign: 'center' }}>
        <h1>Welcome to the About page!</h1>
        <p>This is a simple static page created with Next.js.</p>
      </main>
    </div>
  );
}
