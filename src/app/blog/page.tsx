import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../../../types/post";

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), "/src/app/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // 拡張子を除いたファイル名がslug（記事のURL）になります
    const slug = fileName.replace(/\.md$/, "");

    // マークダウンファイルを文字列として読み込む
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // gray-matterを使ってメタデータをパースする
    const matterResult = matter(fileContents);

    // slugとパースしたデータを返す
    return {
      slug,
      ...matterResult.data,
    };
  });

  return allPostsData;
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <Head>
        <title>ブログ記事一覧</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <div className="text-center w-full max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white my-8">
            BLOG
          </h1>
          {posts.length > 0 ? (
            <ul className="space-y-4">
              {posts.map((post) => (
                <Link key={post.slug} href={`blog/${post.slug}`}>
                  <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    {post.title}
                    <p className="text-gray-600 mt-2">{post.date}</p>
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
              現在、記事はありません。
            </p>
          )}
        </div>
      </main>
    </>
  );
}
