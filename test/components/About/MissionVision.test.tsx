import { render, screen } from "@testing-library/react";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import MissionVision from "../../../components/About/MissionVision";

jest.mock("react-i18next", () => ({
    useTranslation: jest.fn(),
}));

describe("Mission Vision", () => {
    test("Renders a section containing both a mission & vision statement section with the translated contents", () => {
        // Not sure what Type I could use for useTranslationSpy here...
        const useTranslationSpy: any = useTranslation;
        //const tSpy = jest.fn((str) => [str, str + "1"]);
        const contentFromi18n: string[] = [
            "missionContent1",
            "missionContent2",
            "visionContent1",
            "missionTitle",
            "visionTitle",
            "bibleContent",
            "biblePassageRef",
        ];
        const tSpy = jest
            .fn()
            .mockReturnValueOnce([contentFromi18n[0], contentFromi18n[1]])
            .mockReturnValueOnce([contentFromi18n[2]])
            .mockReturnValueOnce(contentFromi18n[3])
            .mockReturnValueOnce(contentFromi18n[4])
            .mockReturnValueOnce(contentFromi18n[5])
            .mockReturnValueOnce(contentFromi18n[6]);

        useTranslationSpy.mockReturnValue({
            t: tSpy,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        });

        const { getByTestId } = render(<MissionVision />);
        const missionVision = getByTestId("mission-vision-section");

        expect(missionVision.tagName).toBe("SECTION");
        contentFromi18n.forEach((content) => {
            expect(missionVision).toHaveTextContent(content);
        });
    });

    test("Should handle missing mission / vision statements", () => {
        // Not sure what Type I could use for useTranslationSpy here...
        const useTranslationSpy: any = useTranslation;
        //const tSpy = jest.fn((str) => [str, str + "1"]);
        const contentFromi18n: string[] = ["missionTitle", "visionTitle", "bibleContent", "biblePassageRef"];
        const tSpy = jest
            .fn()
            .mockReturnValueOnce(null) // should throw error if not handled
            .mockReturnValueOnce(null)
            .mockReturnValueOnce(contentFromi18n[0])
            .mockReturnValueOnce(contentFromi18n[1])
            .mockReturnValueOnce(contentFromi18n[2])
            .mockReturnValueOnce(contentFromi18n[3]);

        useTranslationSpy.mockReturnValue({
            t: tSpy,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        });

        const { getByTestId } = render(<MissionVision />);
        const missionVision = getByTestId("mission-vision-section");

        expect(missionVision.tagName).toBe("SECTION");
        contentFromi18n.forEach((content) => {
            expect(missionVision).toHaveTextContent(content);
        });
    });
});
