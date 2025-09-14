import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { PostData } from "../../../../types/post";

// 動的ルートのサーバーコンポーネント
interface PostProps {
  params: {
    slug: string;
  };
}

// ビルド時にブログ記事のパスを生成 (getStaticPathsの代わり)
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/app/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

// サーバーコンポーネント内で記事データを取得 (getStaticPropsの代わり)
async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(process.cwd(), "src/app/posts", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // メタデータとマークダウン本文をパース
  const matterResult = matter(fileContents);

  // マークダウンをHTMLに変換
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}

export default async function Post({ params }: PostProps) {
  const postData = await getPostData(params.slug);

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <main className="min-h-screen p-8 bg-gray-100 flex justify-center">
        <div className="prose lg:prose-xl max-w-none w-full md:w-3/4 lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {postData.title}
          </h1>
          <p className="text-gray-500 mb-6">{postData.date}</p>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </main>
    </>
  );
}
