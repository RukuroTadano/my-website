import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tadano Rukuro no Website</title>
        <meta name="description" content="只野るくろのWebsiteです" />

        <link rel="icon" href="../public/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="只野るくろのWebsite" />
        <meta
          property="og:description"
          content="このウェブサイトは、只野るくろのポートフォリオ兼ブログです。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tadano-rukuro.vercel.app" />
        {/* <meta
          property="og:image"
          content="https://<画像URL>/ogp-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>

      <main className="flex min-h-screen flex-col items-center bg-gray-800 text-white">
        {/* Section 1: Top */}
        <div className="flex flex-col h-screen w-full p-4 sm:p-8 bg-[#4789A8] justify-center items-center text-center">
          <Image
            src="/topImage.png"
            alt="Top Image"
            width={400}
            height={400}
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full mb-8"
          />
          <Link
            href="blog"
            className="inline-block px-8 py-3 text-lg sm:text-xl font-bold text-white bg-[#a85964] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            BLOG
          </Link>
        </div>

        {/* Section 2: 説明エリア */}
        {/* コンテンツの最大幅を設定し、中央寄せにすると見やすい */}
        <div className="w-full bg-[#D9B0B7] py-12 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              LINEスタンプ販売中！
            </h2>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
              {/* 左のボックス */}
              <div className="w-full md:w-1/3">
                <Image
                  src="/lineSticker.png"
                  alt="Line Sticker"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-lg"
                />
              </div>
              {/* 右のテキスト */}
              <div className="w-full md:w-2/3 items-center flex flex-col">
                <p className="text-base sm:text-lg text-gray-700 font-bold mb-12">
                  もちっとっしていて個性的なぱっつん前髪がチャームポイントの女の子たちのスタンプです。
                  <br />
                  使ってくれると私がとても喜びます。
                </p>
                <Link
                  href="https://store.line.me/stickershop/product/14198397/ja?ref=lsh_stickerDetail"
                  className="inline-block px-8 py-3 text-lg sm:text-xl font-bold text-white bg-[#a85964] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                >
                  もちもちぱっつんガールズをチェック！
                </Link>
                <Link
                  href="https://store.line.me/stickershop/product/32518751/ja"
                  className="inline-block px-8 py-3 text-lg sm:text-xl mt-4 font-bold text-white bg-[#a85964] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                >
                  もちもちぱっつんガールズ2も出たよ
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: About Me */}
        <div className="w-full py-12 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
            {/* md以上で順番を入れ替えるには md:flex-row-reverse を使う */}
            <div className="w-full flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/3">
                <Image
                  src="/rukuroImage.jpeg"
                  alt="Rukuro I Profile mage"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-base sm:text-lg">
                  只野るくろ
                  <br />
                  福岡県生まれ。
                  <br />
                  大学卒業後、某IT企業にてソフトウェアエンジニアとして勤務。
                  主にReactNativeを用いたアプリ開発を担当している。
                  <br />
                  趣味はイラスト制作とゲーム、音楽・映画鑑賞など。
                  たまに着物を着る。
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
