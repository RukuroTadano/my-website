import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Headコンポーネントは、ページのメタデータ（タイトルなど）を設定します */}
      <Head>
        <title>Tadano Rukuro no Website</title>
        <meta name="description" content="只野るくろのWebsiteです" />

        {/* faviconの設定 */}
        <link rel="icon" href="../public/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="只野るくろのWebsite" />
        <meta
          property="og:description"
          content="このウェブサイトは、私のポートフォリオ兼ブログ（の予定）です。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tadano-rukuro.vercel.app" />
        {/* <meta
          property="og:image"
          content="https://<画像URL>/ogp-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
        <div className="rounded-xl bg-white p-10 shadow-xl sm:p-12 md:p-16">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            Welcome to Tadano rukuro&apos;s Website!
          </h1>
          <h1 className="mb-4 text-4xl font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            ブログ記事一覧
          </h1>
          <Link
            href="blog"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
          >
            ブログを見る
          </Link>
        </div>
      </main>
    </>
  );
}
