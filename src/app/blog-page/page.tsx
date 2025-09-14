import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>ブログ記事一覧</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center p-8 bg-gray-100">
        <div className="text-center w-full max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 my-8">
            ブログ記事一覧
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
            現在、記事はありません。
          </p>
        </div>
      </main>
    </>
  );
}
