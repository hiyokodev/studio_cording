import path from "path"
import fs from "fs"
import matter from "gray-matter"

const MEMBERS_DIRECTORY = path.join(process.cwd(), "public/members") //process.cwd()はルートディレクトリ

// .mdファイルからMemberデータを取り出す
export function getMembersData() {
  const fileNames: string[] = fs.readdirSync(MEMBERS_DIRECTORY)
  const allMembersData = fileNames.map((fileName) => {
    // 拡張子を外してファイル名をIDとして取得
    const id: string = fileName.replace(/\.md$/, "")

    // .mdファイルを文字列として読み取る
    const fullPath: string = path.join(MEMBERS_DIRECTORY, fileName)
    const fileContents: string = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    // IDとデータを返す
    return {
      id,
      ...matterResult.data, // .mdファイルのメタデータ
    }
  })

  return allMembersData
}