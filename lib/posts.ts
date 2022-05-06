import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "public/posts") //process.cwd()はルートディレクトリ

// mdファイルのデータを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "") // 拡張子を外してファイル名をIDとして取得

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const matterResult = matter(fileContents)

    // IDとデータを返す
    return {
      id,
      ...matterResult.data // mdファイルのメタデータ
    }
  })
  return allPostsData
}

// getStaticPathでreturnで使うpathを取得する
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, "")
        }
      }
    })
    /*
    返り値の例
      [
        {
          params: {
            id: "ssg-ssr"
          }
        },
        {
          params: {
            id: "next-react"
          }
        }
      ]
    */
}

// IDに基づいてブログ投稿データを返す
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContent = fs.readFileSync(fullPath, "utf8")

  const matterResult = matter(fileContent)

  // matterResult.content  // mdファイルの本文
  const blogContent = await remark().use(html).process(matterResult.content)
  const blogContentHTML = blogContent.toString()

  return {
    id,
    blogContentHTML,
    ...matterResult.data
  }
}