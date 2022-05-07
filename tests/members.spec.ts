import { getMembersData } from "../lib/members";

describe("getMembersDataのテスト", () => {
    test("should first", () => {
        console.log("start test")
      expect(getMembersData()).toEqual("test");
    });
  });

  // Mockで.mdファイルを準備