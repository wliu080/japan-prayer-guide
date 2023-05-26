import { getFeaturedTopic } from "../services";

describe("Month Selector", () => {
    test("S", () => {
        let testDate = new Date();
        const file = getFeaturedTopic(testDate);

        expect(file).toBe("");
    });
});
