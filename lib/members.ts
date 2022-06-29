import path from "path";
import fs from "fs";
import matter from "gray-matter";

// TODO: 不要ファイルの削除

const MEMBERS_DIRECTORY = path.join(
  process.cwd(),
  process.env.MEMBERS_PROFILE_DIR
);

// .mdファイルからMemberデータを取り出す
export function getMembersData() {
  const fileNames: string[] = fs.readdirSync(MEMBERS_DIRECTORY);
  const allMembersData: MembersData[] = fileNames.map((fileName) => {
    // 拡張子を外してファイル名をIDとして取得
    const id: string = fileName.replace(/\.md$/, "");

    // .mdファイルを文字列として読み取る
    const fullPath: string = path.join(MEMBERS_DIRECTORY, fileName);
    const fileContents: string = fs.readFileSync(fullPath, "utf8");
    const matterResult = { ...matter(fileContents).data };

    // TODO: ...matterResultとして各値を返却したいが、そうすると型指定関連のエラーが出てしまう
    const name: string = matterResult.name;
    const name_jpn: string = matterResult.name_jpn;
    const year: number = matterResult.year;
    const joinNumber: number = matterResult.joinNumber;
    const image: string = matterResult.image;
    const description: string = matterResult.description;

    const ret: MembersData = {
      id,
      name,
      name_jpn,
      year,
      joinNumber,
      image,
      description,
    };

    return ret;
  });

  return allMembersData;
}
