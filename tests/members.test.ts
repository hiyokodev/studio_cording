import { getMembersData } from "../lib/members";

describe("Test for getMembersData()", () => {
  test(".mdファイルからメタデータを取得する", () => {
    const expectData = [
      {
        id: "sample",
        name: "名前",
        year: "2022",
        description: "自己紹介文を書いてください",
        image: "/images/members/sample.jpg",
      },
    ];
    expect(getMembersData()).toEqual(expectData);
  });
});
